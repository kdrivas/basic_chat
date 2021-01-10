const express = require('express');
const http = require('http');
const path = require('path');
const socket_io = require('socket.io');

const Socket = require('./socket')

class Server {
	constructor() {
		this.app = express()
		this.server = http.createServer(this.app)
		this.io = socket_io(this.server)
		this.port = process.env.PORT
	}

	middelware(){
		this.app.use(express.static(path.resolve(__dirname + './../public')))
	}

	configureSockets(){
		new Socket(this.io)
	}

	init(){
		this.configureSockets();

		this.server.listen(this.port, () => {
			console.log('Conexion a puerto', this.port);
		});

		this.middelware();
	}
}

module.exports = Server;