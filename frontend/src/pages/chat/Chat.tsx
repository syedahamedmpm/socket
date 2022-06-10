import React,{useEffect, useState} from 'react';
import io  from 'socket.io-client'
let socket;
const Chat = ()=>{
	const [user,setUser] = useState("");
	const[room,setRoom] = useState('')
	const backEndUrl = 'http://localhost:8000/'
	useEffect(() => {
		const search = window.location.search;
		const params = new URLSearchParams(search)
		const name = params.get('name')
		const room = params.get('room')
		setUser(name)
		setRoom(room)
		console.log( name,room )
		socket = io(backEndUrl)
		socket.emit('join',{name:name,room:room},(error:any)=>{
			if(error){
				alert(error)
			}
		})
	}, [])
	

	return(
	<h1>Hi from Chat name</h1>
	
	
	)
}
export default Chat;