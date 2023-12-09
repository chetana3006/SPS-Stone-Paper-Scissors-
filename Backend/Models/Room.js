

const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomCode: {
    type: String,
    required: true
  },
  siteEngineerName: {
    type: String,
    required: true
  },
  roomName: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now 
  },
  participants: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        
      }
    }
    
  ]
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
