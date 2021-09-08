import { Server ,Socket } from "socket.io";
const io = new Server();

io.on('connection', (socket: Socket) => {
  const username = socket.id.toString().substr(0, 5);
  socket.broadcast.emit('newUser', username);
  socket.emit('userName', username);
  console.log(username + ' connected');
  socket.on('disconnect', () => {
    console.log(`user ${username} disconnected`);
  });
});

export default io;