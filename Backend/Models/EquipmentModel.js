const mongoose = require('mongoose');
const socketController = require('../Controller/SocketController');

// Define the Sensor Schema with support for multiple data points
const sensorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  data: [{
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Number, // Adjust the data type based on the expected data type (e.g., String for humidity)
      required: true,
    }
  }],
});

// Define the Equipment Schema
const equipmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  sensors: [sensorSchema],
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

equipmentSchema.post('save', function (doc) {
  socketController.emitSensorDataUpdate(doc);
});

// Create Mongoose models for Equipment and Sensor
const Equipment = mongoose.model('Equipment', equipmentSchema);
const Sensor = mongoose.model('Sensor', sensorSchema);

Equipment.watch().on('change', (change) => {
 
  let changeee = change.documentKey._id;
  console.log(String(changeee));


  const newData =  Equipment.findById(String(changeee))
  .then((res) => {
    console.log('The change is',res); //,res
    socketController.emitSensorDataUpdate(res);
  }).
  catch((err) => {
    console.log(err)
  });
});



// Export the models
module.exports = {
  Equipment,
  Sensor,
};