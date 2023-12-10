const mongoose = require('mongoose')

const safetyChat = new mongoose.Schema({
    messages:[
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
})