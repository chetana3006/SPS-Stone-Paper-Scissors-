const Room = require('../Models/Room.js');
const User = require('../Models/UserModel.js');

const generateUniqueHexCode = async () => {
  let isUnique = false;
  let roomCode;
  console.log(new Date())

  while (!isUnique) {
    roomCode = Math.floor(Math.random() * 1000000).toString(16);

    const existingRoom = await Room.findOne({ roomCode });

    if (!existingRoom) {
      isUnique = true;
    }
  }

  return roomCode;
};

const createRoom = async(req, res) => {
//   const roomDetails = req.body;
console.log(req.body)

   const roomCode = await generateUniqueHexCode();

 
  const {  siteEngineerName, roomName,siteLocation } = req.body;

  console.log(roomCode)
  const newRoom = new Room({
    roomCode,
    siteEngineerName,
    roomName,
    siteLocation,
    created_at: new Date(), 
    
  });

 
  newRoom.save()
    .then((room) => {
      res.status(200).json({
        roomDetails: room 
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message 
      });
    });
};

const addParticipantsToRoom = (req, res) => {
  const { roomId } = req.params;  
  const { participants } = req.body;
  console.log(roomId,participants);
  Room.findById(roomId)
    .then((room) => {
      console.log(room);
      if (!room) {
        return res.status(404).json({ error: 'Room not found' });
      }
      
      room.participants.push({userId:participants});

      return room.save();
    })
    .then((updatedRoom) => {
      res.status(200).json({
        message: 'Participants added successfully',
        updatedRoom: updatedRoom
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message
      });
    });
};

const acceptInviteAndJoinRoom = (req, res) => {
  const { roomId, userId } = req.params;

  Room.findById(roomId)
    .then((room) => {
      if (!room) {
        return res.status(404).json({ error: 'Room not found' });
      }

      const isParticipant = room.participants.some(participant => participant.userId === userId);

      if (!isParticipant) {
        room.participants.push({ userId });
      }

      return room.save();
    })
    .then((updatedRoom) => {
      res.status(200).json({
        message: 'User added to the room participants',
        updatedRoom: updatedRoom
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message
      });
    });
};

const sendInviteToUser = (req, res) => {
  const { roomId, userId } = req.body;
  console.log(roomId,userId);
  User.findByIdAndUpdate({_id:userId},{kahootcode:roomId}).then((re)=>{
    return res.json({
      "message":"Code sent"
    })
  }).catch((e)=>{
    return res.json({
      "message":"error occured"
    }).status(400)
  })
};
// || {roomidhome:Room._id,siteenghome:Room.siteEngineerName};
const buttonafterinvitation = async (req, res) => {
  try {
    const { roomId, userId } = req.body;
    console.log(roomId, userId);

    // Assuming Room is a Mongoose model
    const room = await Room.findById(roomId);

    // Check if userId is already a participant in the room
    let isParticipant = false;
    for (let i = 0; i < room.participants.length; i++) {
      // console.log(room.participants[i]._id,"user id ",userId);
      if (String(room.participants[i]._id) === String(userId)) {
        isParticipant = true;
        break;
      }
    }

    if (isParticipant) {
      return res.status(200).json({
        message: 'User is already a participant in this room',
        updatedRoom: room,
      });
    }

    // Assuming participants is an array field in your Room schema
    room.participants.push(userId);
    const updatedRoom = await room.save();

    res.status(200).json({
      message: 'Participant added successfully',
      updatedRoom: updatedRoom,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};


const changeuserkahoot=(req,res)=>{
  const{roomid,userid}=req.body;

}


const mongoose = require('mongoose');

const postMessageToRoom = async (req, res) => {
  const { userId, message, roomId } = req.body;

  try {
    let room = await Room.findById(roomId);

    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    // Check if userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: 'Invalid userId' });
    }

    room.roomChat.push({ userId: userId, message: message });

    await room.save();

    room = await Room.findById(roomId).populate({
      path: 'roomChat.userId',
      select: 'name email', // Specify the fields you want to populate
    });
    console.log(room.roomChat);
    // console.log(myroom);

    return res.status(200).json({ message: 'Message posted successfully', roomChat: room.roomChat });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error posting message' });
  }
};

const siteengineerallroom=async(req,res)=>{
  const {siteEngineerName}=req.body;
  try {
    const room = await Room.find()
    return res.status(200).json({ rooms: room });
  } catch (error) {
    return res.status(500).json({ error: 'Error getting rooms' });
  }
}


const deleteRoomAndResetUsers = async (req, res) => {
  const { roomId } = req.body;
  try {
    const room = await Room.findById(roomId);

    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    const userIdsInRoom = room.participants.map((participant) => participant.userId);
    console.log(userIdsInRoom);
    // Update users' kahootcode to "no"
    const updateUsers = await User.updateMany(
      { _id: { $in: userIdsInRoom } },
      { $set: { kahootcode: 'no' } }
    );

    // Check if users were updated successfully
    if (!updateUsers || updateUsers.nModified === 0) {
      return res.status(500).json({ error: 'Error updating users' });
    }

    // Delete the room after updating users
    await Room.findByIdAndDelete(roomId);

    return res.json({ message: 'Room deleted and users updated successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error deleting room and updating users' });
  }
};


const dataforhomepage = async (req, res) => {
  try {
    const rooms = await Room.find().populate({
      path: 'roomChat.userId',
      model: 'User',
      select: 'name email', 
    }).populate({
      path: 'participants.userId',
      model: 'User',
      select: 'name email',
    });

    if (!rooms) {
      return res.status(404).json({ error: 'Rooms not found' });
    }

    return res.status(200).json({ rooms: rooms });
  } catch (error) {
    return res.status(500).json({ error: 'Error getting rooms' });
  }
};



const getAllMessagesForRoom = async (req, res) => {
  const { roomId } = req.body;

  try {
    const room = await Room.findById(roomId).populate({
      path: 'roomChat.userId',
      model: 'User', // Assuming your user model is named 'User'
      select: 'name email', // Select the fields you want to retrieve
    });

    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    console.log(room);
    const allMessages = room.roomChat;
    return res.status(200).json({ messages: allMessages });
  } catch (error) {
    return res.status(500).json({ error: 'Error getting messages' });
  }
};




module.exports = {
  createRoom,
  addParticipantsToRoom,
  acceptInviteAndJoinRoom,
  sendInviteToUser,
  buttonafterinvitation,changeuserkahoot,
  postMessageToRoom,
  getAllMessagesForRoom,
  buttonafterinvitation,
  siteengineerallroom,
  deleteRoomAndResetUsers,
  dataforhomepage
}
