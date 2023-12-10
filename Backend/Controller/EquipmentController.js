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
    const { name, utilizationHours, currentLocation, operationalStatus, projectAssociated } = req.query;

    const filters = {};

    // Apply filters
    if (name) filters.name = { $regex: new RegExp(name, 'i') };
    if (utilizationHours) filters.utilizationHours = utilizationHours;
    if (currentLocation) filters.currentLocation = { $regex: new RegExp(currentLocation, 'i') };
    if (operationalStatus) filters.operationalStatus = operationalStatus;
    if (projectAssociated) filters.projectAssociated = { $regex: new RegExp(projectAssociated, 'i') };

    // If search term is provided, apply it to multiple fields
    const search = req.query.search;
    if (search) {
      filters.$or = [
        { name: { $regex: new RegExp(search, 'i') } },
        { currentLocation: { $regex: new RegExp(search, 'i') } },
        { projectAssociated: { $regex: new RegExp(search, 'i') } },
      ];
    }

    const equipment = await EquipmentModel.find(filters);
    res.json(equipment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
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

// exports.updateEquipmentWithSensors = async (req, res) => {
//   try {
//     const { equipmentId, sensorCount, sensorNames } = req.body;

//     // Find the equipment by ID
//     const equipment = await EquipmentModel.findById(equipmentId);

//     // Update sensors array with the specified sensorCount and sensorNames
//     equipment.sensors = [];
//     for (let i = 1; i <= sensorCount; i++) {
//       const sensor = {
//         id: i,
//         sensorName: sensorNames[i - 1],
//       };
//       equipment.sensors.push(sensor);
//     }

//     // Save the updated equipment
//     const updatedEquipment = await equipment.save();

//     res.json(updatedEquipment);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
