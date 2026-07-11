const { Router } = require('express');
const {
  getPanels,
  createPanel,
  getPanelById,
  updatePanel,
  deletePanel,
  getPanelReadings,
  getPanelAlerts,
  getPanelSummary,
  getPanelAnalysis,
} = require('../controllers/panel.controller');
const authMiddleware = require('../middleware/auth.middleware');
const { apiRateLimit } = require('../middleware/rateLimit.middleware');

const router = Router();

router.use(authMiddleware, apiRateLimit);

router.get('/', getPanels);
router.post('/', createPanel);
router.get('/:id', getPanelById);
router.put('/:id', updatePanel);
router.delete('/:id', deletePanel);
router.get('/:id/readings', getPanelReadings);
router.get('/:id/alerts', getPanelAlerts);
router.get('/:id/summary', getPanelSummary);
router.get('/:id/analysis', getPanelAnalysis);

module.exports = router;
