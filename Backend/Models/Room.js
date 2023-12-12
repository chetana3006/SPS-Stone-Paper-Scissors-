

const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomCode: {
    type: String,
    required: true,
    unique:true
  },
  siteEngineerName: {
    type: String,
    required: true
  },
  roomName: {
    type: String,
    required: true
  },
  siteLocation:{
    type:String,
    required:true
  },
  startDate: {
    type: Date,
    required: true,
    default: () => new Date().toISOString().split('T')[0] 
  },
  participants: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        
      }
    }
  ],
  roomChat:[
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
      },
      message:{
        type:String,
        
      }
    }
  ]
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
