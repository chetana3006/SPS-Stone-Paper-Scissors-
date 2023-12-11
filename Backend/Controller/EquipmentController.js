const { Equipment, Sensor } = require('../Models/EquipmentModel');

const createEquipment = async (req, res) => {
  try {
    const { name, type, sensors } = req.body;
    const newEquipment = await Equipment.create({ name, type, sensors });
    res.status(201).json(newEquipment);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

// Get all equipment
const getAllEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.find();
    res.status(200).json(equipment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Get equipment by ID
const getEquipmentById = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    if (!equipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }
    res.status(200).json(equipment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Update equipment by ID
const updateEquipment = async (req, res) => {
  try {
    const { name, type, sensors } = req.body;
    const updatedEquipment = await Equipment.findByIdAndUpdate(req.params.id, { name, type, sensors }, { new: true });
    if (!updatedEquipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }
    res.status(200).json(updatedEquipment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Delete equipment by ID
const deleteEquipment = async (req, res) => {
  try {
    const deletedEquipment = await Equipment.findByIdAndDelete(req.params.id);
    if (!deletedEquipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }
    res.status(200).json({ message: 'Equipment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createEquipment,
  getAllEquipment,
  getEquipmentById,
  updateEquipment,
  deleteEquipment,
};
