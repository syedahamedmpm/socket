//Library

const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const { addUsers,removeUser, getUser } = require('./entity');


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
	//Intha room la ulla ellarukkume Message Pogum
	socket.emit("message",{user:'admin',text:`Welcome ${user.name}`})
	////Intha room la ulla ellarukkume Message Pogum exclude newly joined user
	socket.broadcast.to(user.room).emit("message",{user:'admin',text:`${user.name} Joined`})
	})
	
	
	socket.on("disconnect",()=>{
		console.log("User Disconnected");
		const user = removeUser(socket.id)
		if(user){
			io.to(user.room).emit("message",{user:'admin',text : `${user.name} has left`})
		}
	})
	socket.on('sendMsg',(mes,callBack)=>{
		console.log("sendMsg",mes);
		const user  = getUser(socket.id)
		console.log("useruseruseruser",user)
		if(user){
			io.to(user.room).emit("message",{user:user.name,text : mes})
		}
		else{
			callBack('User Not Found')
		}
	})
})

//Run server
server.listen(8000,()=>console.log("Server Starts on 8000"))