const EquipmentModel = require("../Models/EquipmentModel");

// Create (POST)
exports.createEquipment = async (req, res) => {
  try {
    const equipment = new EquipmentModel(req.body);
    const result = await equipment.save();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read All (GET)
exports.getEquipments = async (req, res) => {
  try {
    const equipment = await EquipmentModel.find();
    res.json(equipment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read with Filters (GET)
exports.getFilteredEquipments = async (req, res) => {
    try {
      const { name, utilizationHours, currentLocation, operationalStatus, projectAssociated, createdAt } = req.body;
  
      const filters = {};
      if (name) filters.name = name;
      if (utilizationHours) filters.utilizationHours = utilizationHours;
      if (currentLocation) filters.currentLocation = currentLocation;
      if (operationalStatus) filters.operationalStatus = operationalStatus;
      if (projectAssociated) filters.projectAssociated = projectAssociated;
      if (createdAt) filters.createdAt = createdAt;
  
      const equipment = await EquipmentModel.find(filters);
      res.json(equipment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

// Update (PUT)
exports.updateEquipment = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedEquipment = req.body;
    const result = await EquipmentModel.findByIdAndUpdate(id, updatedEquipment, { new: true });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete (DELETE)
exports.deleteEquipment = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await EquipmentModel.findByIdAndDelete(id);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
