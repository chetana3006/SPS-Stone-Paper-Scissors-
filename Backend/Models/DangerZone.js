const mongoose = require('mongoose');

const dangerZoneSchema = new mongoose.Schema({
  lat: String,
  lon: String,
  name: String,
  picture:String
});

const DangerZone = mongoose.model('DangerZone', dangerZoneSchema);

module.exports = DangerZone;
