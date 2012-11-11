module.exports = function(io){
  io.sockets.on('connection', function (socket) {
    socket.on('message', function (msg) {
      socket.emit('post', msg);
    });
  });
}
