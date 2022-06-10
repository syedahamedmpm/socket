import React,{useEffect} from 'react';
import io  from 'socket.io-client'
import Box from '@mui/material/Box';
import {TextField,Button} from '@mui/material';
let socket;
const Chat = ()=>{
	const backEndUrl = 'http://localhost:8000/'
	useEffect(()=>{
		socket = io(backEndUrl)
	},[])
	return(
	
	<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Name" variant="standard" />
      <TextField label="Password" variant="standard" />
	  <Button variant="submit">Submit</Button>
    </Box>
	
	)
}
export default Chat;