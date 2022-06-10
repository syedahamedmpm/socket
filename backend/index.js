//Library

const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const { addUsers } = require('./entity');


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
	socket.on('join',({name,room},callBack)=>{
		
		const {user,error} = addUsers({id:socket.id,name:name,room:room})
		console.log(user)
	if(error){
		callBack(error)
		console.log("error",error)
		return;
	}
	socket.join(user.room)
	socket.emit("Message",{user:'admin',text:`${user.name} Joined`})
	})
	
	
	socket.on("disconnect",()=>{
		console.log("User Disconnected");
	})
})

//Run server
server.listen(8000,()=>console.log("Server Starts on 8000"))