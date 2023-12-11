const mongoose = require('mongoose')

const safetyChat = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
      },
            lat:{
            type:String,
            default:""
            },
            lon:{
            type:String,
            default:""
            }
     
})

const SafetyTrack = mongoose.model('SafetyTrack',safetyChat);

module.exports=SafetyTrack;
