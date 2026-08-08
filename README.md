# ⚙️ GridSense Backend Subsystem — System Architecture Guide

> **Enterprise Node.js Backend with Socket.IO Real-Time Engine, LangGraph Multi-Agent Copilot, `pgvector` Hybrid RAG, and Prisma ACID Transactions.**

---

## 📐 Server Micro-Services & Gateway Flowchart

```mermaid
flowchart TB
    subgraph Ingestion ["Client Communication Layer"]
        REST["REST API Endpoints (/api/*)"]
        WS["Socket.IO WebSocket Gateway Server"]
    end

    subgraph BusinessLogic ["Core Business & Simulation Layer"]
        AuthMiddleware["JWT Authentication Guard"]
        SimulatorModule["In-Memory Solar Simulator"]
        PaymentService["Razorpay ACID Transaction Service"]
    end

    subgraph Intelligence ["LangGraph Multi-Agent Subsystem"]
        CopilotGraph["LangGraph StateGraph Engine"]
        GroqLLM["Groq Llama-3.1-8b-Instant Engine"]
        
        subgraph ToolRegistry ["Agent Tools Matrix"]
            T1["getSystemStatus (SQL)"]
            T2["getActiveAlerts (SQL)"]
            T3["getPanelTelemetry (SQL)"]
            T4["searchHardwareManuals (pgvector)"]
        end
    end

    subgraph DatabaseLayer ["Data & Vector Storage Layer"]
        PrismaORM["Prisma Client Singleton (src/db/prisma.js)"]
        PgPrimary[(Supabase PostgreSQL Primary DB)]
        PgVector[(pgvector Vector Extension)]
    end

    REST --> AuthMiddleware
    AuthMiddleware --> PaymentService
    AuthMiddleware --> CopilotGraph
    SimulatorModule -->|Emit 2s Live Telemetry| WS
    CopilotGraph <--> GroqLLM
    CopilotGraph --> ToolRegistry
    T1 --> PrismaORM
    T2 --> PrismaORM
    T3 --> PrismaORM
    T4 <-->|HuggingFace Embeddings| PgVector
    PaymentService -->|prisma.$transaction| PrismaORM
    PrismaORM <--> PgPrimary
```

---

## 🤖 LangGraph Multi-Agent State Machine

The AI Copilot operates using a stateful directed graph compiled via `@langchain/langgraph`:

```mermaid
flowchart LR
    Start([__start__]) --> Agent[Agent Node: Evaluate State & Intent]
    Agent --> Decision{Tools Requested?}
    
    Decision -- Yes --> ToolNode[Tools Node: Execute SQL or RAG Tool]
    ToolNode --> Agent
    
    Decision -- No --> End([__end__: Final Response Delivered])
```

### 🛠️ Agent Tools Specification Matrix

| Tool Name | Technology | Inputs | Output Data |
| :--- | :--- | :--- | :--- |
| `getSystemStatus` | Prisma SQL | `userId` | System configuration, tier plan, total array count |
| `getActiveAlerts` | Prisma SQL | `userId` | List of active critical & warning alert records |
| `getPanelTelemetry` | Prisma SQL | `userId`, `panelName` (optional) | Real-time voltage, power, efficiency, fault state & alert details |
| `searchHardwareManuals` | `pgvector` + HuggingFace | `query` | Top 2 matching technical manual chunks via cosine similarity |

---

## 🔍 `pgvector` Hybrid RAG Embedding & Retrieval Pipeline

```mermaid
flowchart TB
    subgraph OfflineSeeding ["Offline Vector Ingestion Script"]
        PDF["Solar Inverter Technical Manuals"]
        Chunker["LangChain Recursive Text Splitter"]
        HFEncoder["HuggingFace (all-MiniLM-L6-v2)"]
        VectorDB[("pgvector HardwareManual Table")]
        
        PDF --> Chunker
        Chunker -->|Text Chunks| HFEncoder
        HFEncoder -->|384-dim Vectors| VectorDB
    end

    subgraph RuntimeRetrieval ["Real-Time RAG Query Path"]
        UserQuery["User Asks: 'What does Error Code E01 mean?'"]
        QueryEmbedding["HuggingFace Embeddings Engine"]
        CosineSearch["PrismaVectorStore Cosine Similarity Search"]
        LLMSynthesis["Groq LLM Synthesis"]

        UserQuery --> QueryEmbedding
        QueryEmbedding -->|Query Vector| CosineSearch
        CosineSearch <-->|Compare Vectors| VectorDB
        CosineSearch -->|Context Chunks| LLMSynthesis
        LLMSynthesis -->|Diagnostic Guide| FinalOutput["User Troubleshooting Response"]
    end
```

---

## 💳 ACID Transaction Execution Flowchart (`payment.service.js`)

To guarantee strict Consistency and Isolation across subscriptions, Razorpay payment verification uses Prisma interactive transactions:

```mermaid
sequenceDiagram
    autonumber
    participant Client as Frontend Client
    participant Controller as Payment Controller
    participant Service as Payment Service
    participant Tx as Prisma $transaction
    participant DB as PostgreSQL Database

    Client->>Controller: POST /api/payments/verify
    Controller->>Service: verifyAndActivate(paymentData)
    Service->>Tx: Begin Interactive Transaction
    Tx->>DB: 1. Upsert PaymentHistory Record
    Tx->>DB: 2. Create / Update Subscription Record
    Tx->>DB: 3. Update User Plan Tier & Expiry
    DB-->>Tx: All Writes Successful
    Tx-->>Service: Commit Transaction
    Service-->>Controller: Return Activation Success
    Controller-->>Client: HTTP 200 Plan Upgraded
```

---

## 🛡️ Database Connection Pool Optimization Strategy

To prevent connection handle exhaustion (`EMAXCONNSESSION`) on cloud PostgreSQL PgBouncer instances:

1. **Shared Database Singleton (`src/db/prisma.js`):** All services import a single shared `PrismaClient` instance instead of spawning duplicate connection pools.
2. **In-Memory Telemetry Aggregation (`src/simulator/panel.simulator.js`):** Real-time 2-second simulation ticks compute metrics in-memory, eliminating 2,880 queries/hour per user.
3. **Short-Circuited Normal Panel AI Analysis (`src/services/ai.service.js`):** Healthy solar panels ($\ge 85\%$ efficiency) generate normal status reports in-memory, reducing Groq LLM token consumption by **99.5%**.

---

## 🧪 Testing Suite Execution

Run automated unit and integration tests:

```bash
# Navigate to server directory
cd server

# Run Jest test suites
npm run test
```

**Expected Output:**
```text
PASS tests/integration/copilot.routes.test.js
PASS tests/unit/copilot.service.test.js

Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
Time:        2.361 s
```
