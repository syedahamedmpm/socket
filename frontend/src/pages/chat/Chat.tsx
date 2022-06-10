import React,{useEffect} from 'react';
import io  from 'socket.io-client'

let socket;
const Chat = ()=>{
	const backEndUrl = 'http://localhost:8000/'
	useEffect(()=>{
		socket = io(backEndUrl)
	},[])
	return(
	<h1>Hi from Chat</h1>
	
	
	)
}
export default Chat;