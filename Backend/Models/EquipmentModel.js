const mongoose = require('mongoose');

const EquipmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  utilizationHours: {
    type: Number,
    default: 0,
  },
  currentLocation: {
    type: String,
    required: true,
  },
  operationalStatus: {
    type: String,
    enum: ['Operational', 'Under Repair', 'Out of Service'],
    default: 'Operational',
  },
  projectAssociated: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const EquipmentModel = mongoose.model('EquipmentModel', EquipmentSchema);

module.exports = EquipmentModel;
