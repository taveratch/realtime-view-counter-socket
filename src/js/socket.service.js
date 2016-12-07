let socket = io();
let isConnect = socket.id;
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
