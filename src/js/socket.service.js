let socket = io(location.hostname + ':3000');
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
