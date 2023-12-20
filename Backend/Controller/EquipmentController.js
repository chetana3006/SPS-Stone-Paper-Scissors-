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
    const {name} = req.params
    const equipment = await Equipment.findOne({name : name});
    if (!equipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }
    res.status(200).json({equipmentData : equipment});
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

const drawChartData =  async (req, res) => {
  try {
    const { equipmentId } = req.params;

    // Find equipment by ID
    const equipment = await Equipment.findById(equipmentId);

    if (!equipment) {
      return res.status(404).json({ error: 'Equipment not found' });
    }

    // Send all sensor data to the React page
    res.json({ sensorData: equipment.sensors });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const addData = async (req, res) => {
  console.log("came")
  const { name } = req.params;
  const { temperature, humidity } = req.body;
  console.log(req.body);
  try {
    const updatedEquipment = await Equipment.findOneAndUpdate(
      { name: name },
      {
        $set: {
          'sensors.data.0.value': temperature,
          'sensors.data.1.value': humidity,
          updated_at: Date.now(),
        },
      },
      { new: true }
    );

    if (!updatedEquipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }

    res.json(updatedEquipment);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

}



module.exports = {
  createEquipment,
  getAllEquipment,
  getEquipmentById,
  updateEquipment,
  deleteEquipment,
  drawChartData,
  addData
};