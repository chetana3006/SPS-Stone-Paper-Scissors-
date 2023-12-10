const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  picture: {
    type: String, 
    required: true,
  },
});

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
