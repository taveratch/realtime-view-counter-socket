module.exports = {
  startServer(http) {
    let io = require('socket.io')(http);
    let count = 0;

    io.on('connection', function(socket) {
      /* if there is new connection send the current count*/
    	sendCount(socket, count);
    	socket.on('count', (msg) => {
        /* if there is new view, then increase and broadcast to all*/
    		count++;
    		broadcastCount(count);
    	});
    });
    const broadcastCount = (count) => {
    	io.emit('update', {
    		count: count
    	});
    };

    const sendCount = (socket, count) => {
      socket.emit('update', {
        count: count
      });
    };
  }
};
