class Socket {
	constructor(io){
		this.io = io
		this.addEvents();
	}

	addEvents() {

		this.io.on('connection', client => {
			client.on('message-chat', (data) => {
				console.log(data);
				this.io.emit('message-chat', data)
			});
		})
	}
}

module.exports = Socket