//Library

const express = require('express');
const http = require('http');
const socketio = require('socket.io')


//Instance

const app = express();
const server = http.createServer(app)
const io = socketio(server,{cors:{origin: '*'}})

//Check

app.get('/',(req,res)=>{
	res.json({
		message:"Api Is Working"
	})
})

//Socket

io.on("connect",(socket)=>{
	console.log("User Is Connected");
	
	socket.on("disconnect",()=>{
		console.log("User Disconnected");
	})
})

//Run server
server.listen(8000,()=>console.log("Server Starts on 8000"))