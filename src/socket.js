var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const port = (process.env.PORT || 3000);
let count = 0;
io.on('connection', function(socket) {
	console.log('a user connected');
	sendCount(count);
	socket.on('count', (msg) => {
		console.log('count');
		count++;
		sendCount(count);
	});
});

const sendCount = (count) => {
	io.emit('update', {
		count: count
	});
};

http.listen(port, function() {
	console.log('listening on *:3000');
});
