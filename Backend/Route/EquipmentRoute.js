// In your equipment routes file (e.g., equipmentRoutes.js)
const express = require('express');
const router = express.Router();
const equipmentController = require('../Controller/EquipmentController');

// Create Equipment
router.post('/api/equipment', equipmentController.createEquipment);

// Get All Equipment
router.get('/api/equipment', equipmentController.getAllEquipment);

// Get Equipment by ID
router.get('/api/equipment/:id', equipmentController.getEquipmentById);

// Update Equipment by ID
router.put('/api/equipment/:id', equipmentController.updateEquipment);

// Delete Equipment by ID
router.delete('/api/equipment/:id', equipmentController.deleteEquipment);

// More routes can be added based on your specific needs.

router.get('/api/equipment/:id',equipmentController.drawChartData);

module.exports = router;
