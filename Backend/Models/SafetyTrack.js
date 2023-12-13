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
safetyChat.post('save', function (doc) {
  const socketController = require('../Controller/socketfortrack.js');
  socketController.emitSensorDataUpdate(doc);
});


SafetyTrack.watch().on('change', (change) => {
 
    let changeee = change.documentKey._id;
    console.log(String(changeee));
    const socketController = require('../Controller/socketfortrack.js');
  
    const newData =  SafetyTrack.find()
    .then((res) => {
      console.log('The change is',res);
      socketController.emitSensorDataUpdate(res);
    }).
    catch((err) => {
      console.log(err)
    }); 
});



module.exports=SafetyTrack;
