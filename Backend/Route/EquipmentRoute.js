const express = require('express');
const router = express.Router();
const {
  createEquipment,
  getEquipments,
  getFilteredEquipments,
  updateEquipment,
  deleteEquipment,
} = require('../Controller/EquipmentController');

// Create (POST)
router.post('/equipment', createEquipment);

// Read All (GET)
router.get('/equipment', getEquipments);

// Read with Filters (GET)
router.get('/equipment/filtered', getFilteredEquipments);

// Update (PUT)
router.put('/equipment/:id', updateEquipment);

// Delete (DELETE)
router.delete('/equipment/:id', deleteEquipment);

module.exports = router;
