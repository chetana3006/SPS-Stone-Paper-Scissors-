const express = require('express');
const router = express.Router();

const {
  createRoom,
  addParticipantsToRoom,
  acceptInviteAndJoinRoom,
  sendInviteToUser
} = require('../Controller/createRoom.js');



router.post('/create-room', createRoom);

router.patch('/room/:roomId/add-participants', addParticipantsToRoom);

router.patch('/room/:roomId/accept-invite/:userId', acceptInviteAndJoinRoom);

router.post('/room/:roomId/send-invite/:userIdToInvite', sendInviteToUser);

module.exports = router;
