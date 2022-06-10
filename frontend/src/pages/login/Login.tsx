import React from 'react';
import Box from '@mui/material/Box';
import {TextField,Button,Card, FormControl} from '@mui/material';
const Login = ()=>{
	
	return(
		<Card variant="outlined" sx={{position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%, -50%)',width:'500px',padding:'20px'
	}}>
			<FormControl sx={{display:'block'}}>
			<TextField fullWidth label="Name" variant="standard" />
			</FormControl>
			<FormControl sx={{display:'block'}}>
			<TextField fullWidth label="Password" variant="standard" />
			</FormControl>
			<FormControl sx={{display:'block',marginTop:'30px'}}>
			<Button fullWidth variant="contained">Submit</Button>
			</FormControl>
			
		</Card>

		
	)
}

export default Login;