const { ChatGroq } = require('@langchain/groq');
const { Prisma } = require('../generated/client');
const prisma = require('../db/prisma');
const { PrismaVectorStore } = require('@langchain/community/vectorstores/prisma');
const { HuggingFaceInferenceEmbeddings } = require('@langchain/community/embeddings/hf');
const { tool } = require('@langchain/core/tools');
const { StateGraph, MessagesAnnotation } = require('@langchain/langgraph');
const { SystemMessage, HumanMessage, AIMessage, ToolMessage } = require('@langchain/core/messages');

// Initialize the LLM
function getLLM() {
  if (!process.env.GROQ_API_KEY || process.env.GROQ_API_KEY === 'add_your_groq_key_here') {
    throw new Error('AI Copilot is currently unavailable (Missing API Key).');
  }
  return new ChatGroq({
    apiKey: process.env.GROQ_API_KEY,
    model: 'llama-3.1-8b-instant',
    temperature: 0.1,
  });
}

// -------------------------------------------------------------
// 1. SQL Agent Tools (Telemetry Analytics)
// -------------------------------------------------------------
const getSystemStatus = tool(async ({ userId }) => {
  const config = await prisma.systemConfig.findUnique({ where: { userId } });
  const panels = await prisma.panel.count({ where: { userId } });
  return JSON.stringify({ system: config, totalPanels: panels });
}, {
  name: 'getSystemStatus',
  description: 'Fetch the overall solar system status, configuration, and total number of panels.',
  schema: require('zod').z.object({ userId: require('zod').z.string() })
});

const getActiveAlerts = tool(async ({ userId }) => {
  const alerts = await prisma.alert.findMany({
    where: { panel: { userId }, resolved: false },
    include: { panel: { select: { name: true } } }
  });
  return JSON.stringify(alerts.length > 0 ? alerts : { message: 'No active alerts. System is healthy.' });
}, {
  name: 'getActiveAlerts',
  description: 'Fetch all active (unresolved) alerts or faults for the users solar panels.',
  schema: require('zod').z.object({ userId: require('zod').z.string() })
});

const getPanelTelemetry = tool(async ({ userId, panelName }) => {
  const panels = await prisma.panel.findMany({
    where: {
      userId,
      ...(panelName ? { name: { contains: panelName, mode: 'insensitive' } } : {})
    },
    include: {
      readings: { orderBy: { timestamp: 'desc' }, take: 1 },
      alerts: { where: { resolved: false } }
    }
  });

  if (!panels.length) {
    return JSON.stringify({ message: `No panel found matching "${panelName || 'all'}"` });
  }

  const result = panels.map(p => {
    const latest = p.readings[0] || {};
    const activeAlert = p.alerts[0];
    return {
      panelId: p.id,
      name: p.name,
      status: p.status,
      currentFault: p.currentFault,
      activeAlert: activeAlert ? { title: activeAlert.title, severity: activeAlert.severity, message: activeAlert.message } : null,
      telemetry: {
        power: latest.power || 0,
        voltage: latest.voltage || 0,
        current: latest.current || 0,
        temperature: latest.temperature || 0,
        efficiency: latest.efficiency || 0,
        irradiance: latest.irradiance || 0,
        timestamp: latest.timestamp
      }
    };
  });

  return JSON.stringify(result);
}, {
  name: 'getPanelTelemetry',
  description: 'Fetch real-time live telemetry, power, voltage, efficiency, fault state, and active alerts for a specific solar panel (e.g., "Panel Beta", "Panel A") or all panels.',
  schema: require('zod').z.object({
    userId: require('zod').z.string(),
    panelName: require('zod').z.string().optional()
  })
});

// -------------------------------------------------------------
// 2. RAG Agent Tool (Technical Manual Search)
// -------------------------------------------------------------
const searchHardwareManuals = tool(async ({ query }) => {
  if (!process.env.HUGGINGFACEHUB_API_KEY) return 'RAG is disabled (Missing HuggingFace key)';

  const embeddings = new HuggingFaceInferenceEmbeddings({
    apiKey: process.env.HUGGINGFACEHUB_API_KEY,
    model: 'sentence-transformers/all-MiniLM-L6-v2',
  });

  const vectorStore = PrismaVectorStore.withModel(prisma).create(embeddings, {
    prisma: Prisma,
    tableName: 'HardwareManual',
    vectorColumnName: 'embedding',
    columns: {
      id: PrismaVectorStore.IdColumn,
      content: PrismaVectorStore.ContentColumn,
    },
  });

  const results = await vectorStore.similaritySearch(query, 2);
  return results.map(r => r.pageContent).join('\n\n');
}, {
  name: 'searchHardwareManuals',
  description: 'Use this tool to search the hardware manuals for error codes, maintenance, troubleshooting, and specifications.',
  schema: require('zod').z.object({ query: require('zod').z.string() })
});

// -------------------------------------------------------------
// 3. LangGraph Multi-Agent Orchestration
// -------------------------------------------------------------
const tools = [getSystemStatus, getActiveAlerts, getPanelTelemetry, searchHardwareManuals];

async function callModel(state) {
  const llm = getLLM();
  const llmWithTools = llm.bindTools(tools);

  const response = await llmWithTools.invoke(state.messages);
  return { messages: [response] };
}

async function callTools(state) {
  const lastMessage = state.messages[state.messages.length - 1];
  
  const toolResults = await Promise.all(
    lastMessage.tool_calls.map(async (toolCall) => {
      const toolInstance = tools.find(t => t.name === toolCall.name);
      if (!toolInstance) return new ToolMessage({ tool_call_id: toolCall.id, content: 'Tool not found' });
      
      const result = await toolInstance.invoke(toolCall.args);
      return new ToolMessage({ tool_call_id: toolCall.id, content: result });
    })
  );

  return { messages: toolResults };
}

function shouldContinue(state) {
  const lastMessage = state.messages[state.messages.length - 1];
  if (lastMessage.tool_calls?.length) {
    return "tools";
  }
  return "__end__";
}

// Build the LangGraph
const workflow = new StateGraph(MessagesAnnotation)
  .addNode("agent", callModel)
  .addNode("tools", callTools)
  .addEdge("__start__", "agent")
  .addConditionalEdges("agent", shouldContinue)
  .addEdge("tools", "agent");

const app = workflow.compile();

// -------------------------------------------------------------
// Main Export
// -------------------------------------------------------------
async function handleChat(userId, messageHistory) {
  try {
    const systemPrompt = new SystemMessage(
      `You are the GridSense AI Copilot — a friendly, natural, and highly intelligent AI assistant for solar power system users.
Current Authenticated User ID: "${userId}".

Guidelines:
- For general greetings, small talk, or identity questions (e.g. "hi", "hey", "hello", "who are you?"), answer warmly and naturally as GridSense AI Copilot. DO NOT execute system queries or report alerts unless requested.
- For overall telemetry or system status questions (e.g. "how many panels do I have?", "what is my overall system status?"), call getSystemStatus or getActiveAlerts using userId "${userId}".
- For queries about specific solar panel health, power, efficiency, fault state, or metrics (e.g. "health of Panel Beta", "how is panel 1 doing?"), call getPanelTelemetry with panelName and userId "${userId}".
- For hardware issues, error codes, or troubleshooting guides (e.g. "Error E01", "inverter maintenance"), call searchHardwareManuals.
- Always provide natural, engaging, precise, and accurate responses based strictly on real live data.`
    );

    const formattedMessages = [systemPrompt];
    for (const m of messageHistory) {
      if (m.role === 'user') {
        formattedMessages.push(new HumanMessage(m.content));
      } else if (m.role === 'assistant') {
        formattedMessages.push(new AIMessage(m.content));
      }
    }

    const result = await app.invoke({ messages: formattedMessages });
    const finalMessage = result.messages[result.messages.length - 1];
    
    return finalMessage.content;
  } catch (error) {
    console.error('Copilot Chat Error:', error);
    throw new Error('Failed to generate AI response.');
  }
}

module.exports = { handleChat };
