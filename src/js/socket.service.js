let socket = io();
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
