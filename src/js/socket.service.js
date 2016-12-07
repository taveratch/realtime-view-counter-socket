const port = (process.env.PORT || 3000);
let socket = io(location.hostname + ':' + port);
export default {
	count() {
		socket.emit('count', true);
	},
	subscribe(callback) {
		socket.on('update', (data) => {
			callback(data);
		});
	}
};
