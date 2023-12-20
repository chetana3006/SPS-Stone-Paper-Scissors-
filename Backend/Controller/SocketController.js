const socketIO = require('socket.io');

let io;

function initSocket(server) {
  io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.emit('message', 'Welcome to the real-time monitoring server!');
  });
}

function emitSensorDataUpdate(newData) {
  if (io) {
    io.emit('sensorDataUpdate', newData);
    console.log('Changes emitted');
  }
}

module.exports = { initSocket, emitSensorDataUpdate };