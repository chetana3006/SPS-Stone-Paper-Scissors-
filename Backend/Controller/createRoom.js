const Room = require('../Models/Room.js')

const generateUniqueHexCode = async () => {
  let isUnique = false;
  let roomCode;

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
console.log("dsdsds")

   const roomCode = await generateUniqueHexCode();

 
  const {  siteEngineerName, roomName } = req.body;

  console.log(roomCode)
  const newRoom = new Room({
    roomCode,
    siteEngineerName,
    roomName,
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

  Room.findById(roomId)
    .then((room) => {
      if (!room) {
        return res.status(404).json({ error: 'Room not found' });
      }

      room.participants.push(...participants);

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
  const { roomId, userIdToInvite } = req.params;

  res.status(200).json({
    message: 'Invitation sent successfully'
  });
};




module.exports = {
  createRoom,
  addParticipantsToRoom,
  acceptInviteAndJoinRoom,
  sendInviteToUser
};
