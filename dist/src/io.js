"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const io = new socket_io_1.Server();
io.on('connection', (socket) => {
    const username = socket.id.toString().substr(0, 5);
    socket.broadcast.emit('newUser', username);
    socket.emit('userName', username);
    console.log(username + ' connected');
    socket.on('disconnect', () => {
        console.log(`user ${username} disconnected`);
    });
});
exports.default = io;
//# sourceMappingURL=io.js.map