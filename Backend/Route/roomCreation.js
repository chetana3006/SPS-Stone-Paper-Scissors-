const express = require('express');
const router = express.Router();

const {
  createRoom,
  addParticipantsToRoom,
  acceptInviteAndJoinRoom,
  sendInviteToUser,
  buttonafterinvitation,
  postMessageToRoom,
  getAllMessagesForRoom,
  siteengineerroom,
  siteengineerallroom,
  deleteRoomAndResetUsers,
  dataforhomepage
} = require('../Controller/createRoom.js');



router.post('/create-room', createRoom);

router.patch('/room/:roomId/add-participants', addParticipantsToRoom);

router.patch('/room/:roomId/accept-invite/:userId', acceptInviteAndJoinRoom);

router.post('/inviteroom/', sendInviteToUser);
router.post('/afterinviteroom/',buttonafterinvitation );
router.post('/addMessage',postMessageToRoom)
router.post('/getAllMessages',getAllMessagesForRoom)
router.get('/siteEngineerroom',siteengineerallroom)
router.post('/deleteroomsiteEngineer',deleteRoomAndResetUsers)
router.get('/dataforhome',dataforhomepage)

module.exports = router;
