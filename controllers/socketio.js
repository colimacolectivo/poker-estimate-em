module.exports = function(io){
  io.sockets.on('connection', function (socket) {

    socket.on('message', function (msg) {
      socket.emit('post', msg);
    });


    socket.on('new game', function (msg) {
      socket.emit('show games', msg);
    });

  });
}
