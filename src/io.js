const io = require('socket.io')();

io.on('connection', (socket) => {
  const username = socket.id.toString().substr(0, 5);
  socket.broadcast.emit('newUser', username);
  socket.emit('userName', username);
  console.log(username + ' connected');
  socket.on('disconnect', () => {
    console.log(`user ${username} disconnected`);
  });
});

module.exports = io;