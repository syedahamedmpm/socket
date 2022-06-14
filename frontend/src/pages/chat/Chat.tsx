import { DefaultEventsMap } from '@socket.io/component-emitter';
import React,{useEffect, useState} from 'react';
import io, { Socket } from 'socket.io-client'
const Chat = ()=>{
	const [user,setUser] = useState("");
	const[room,setRoom] = useState('')
	const[messages,setMessages] = useState([])
	const[msg,setMsg] = useState([])
	const backEndUrl = 'http://localhost:8000/'
	let socket: Socket<DefaultEventsMap, DefaultEventsMap>;
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
			console.log("join",error)
			if(error){
				alert(error)
			}
		})
		return () => {
			socket.disconnect();
			socket.off();

		}
	}, [])
	useEffect(()=>{
		console.log("Message Useeffect Working");
		socket.on("message",msg=>{
			console.log("For Me",msg);
			setMessages(prevMessages=>[...prevMessages,msg])
		  })
	},[])
	socket = io(backEndUrl)
	const sendMessage = (e) =>{
		e.preventDefault();
		socket.emit('sendMsg',msg,()=>setMsg(""))
		
	}
	return(
		<>
		<h1>Hi from Chat</h1>
		<ul>
			{
				messages.map((mess,index)=>(
					<li key={index}>{JSON.stringify(mess)}</li>
				))
			}
		</ul>
		<input type="text" 
		value={msg} name="msg" 
		onChange={(e)=>setMsg(e.target.value)}
		onKeyPress={(e)=>e.key ==="Enter" ? sendMessage(e) : null}
		/>
		</>
	
	
	
	)
}
export default Chat;