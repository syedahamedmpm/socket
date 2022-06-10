import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {TextField,Button,Card, FormControl} from '@mui/material';
const Login = ()=>{
	const [user,setUser] = useState("");
	const[room,setRoom] = useState('')
	const handleOnChange = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
		setUser(e.target.value)
		console.log(user)
	}
	const handleOnChangeRoom = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
		setRoom(e.target.value)
		console.log(room)
	}
	const onmysubmit= (e: { preventDefault: () => void; }) =>{
		if(!user || !room){
			e.preventDefault()
		}
		else{
			return null;
		}
	}
	return(
		<Card variant="outlined" sx={{position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%, -50%)',width:'500px',padding:'20px'
	}}>
			<form>
			<FormControl sx={{display:'block'}}>
			<TextField fullWidth label="Name" variant="standard"  onChange={handleOnChange}/>
			</FormControl>
			<FormControl sx={{display:'block'}}>
			<TextField fullWidth label="Password" variant="standard" onChange={handleOnChangeRoom} />
			</FormControl>
			<FormControl sx={{display:'block',marginTop:'30px'}}>
				<Link onClick={onmysubmit} to={`/chat/?name=${user}&room=${room}`}>
				<input type="submit"  value="Submit"/>
				</Link>
			
			</FormControl>
			</form>
		</Card>

		
	)
}

export default Login;