import React, {useState} from 'react'
import { Box, Container, InputAdornment, TextField, Button, Paper } from '@mui/material'
import { makeStyles } from "@mui/styles";
import axios from 'axios';

const useStyles = makeStyles({
    inputWidth:{
        width:'100%',
    },
    inputStyles:{

    }
})

export default function Login(){
    const classes = useStyles('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (e) =>{
        e.preventDefault();

        const credentials = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        console.log(credentials);
        
        axios.post('http://localhost:5000/auth/register', credentials)
            .then(() => {
                console.log('Success');
            })
            .catch((err)=>{
                console.log('Err', err);
            })
    }

    return(
        <Box sx={{display: "flex", justifyContent: "center"}}>

        <Box sx={{py:20, width:1}} textAlign={"center"} position="absolute" top="0px">
            <h1>Joshua Duke</h1>
            <p>Insert Logo Here</p>
        </Box>

            <Box sx={{py:20, px:2}} position="absolute" bottom="0px">
            <Container>
                <h1>Register</h1>
            </Container>

            <Paper>
                <Container>
                    <form>
                        <Box textAlign={"center"}>
                            <button>Register with Google</button>

                            <Box component="p" sx={{pt:1, fontSize: "0.7em"}}>
                                Or, register with email...
                            </Box>
                        </Box>

                        
                        <TextField  variant="standard"
                                        name="firstName" 
                                        type="text" 
                                        placeholder='First Name' 
                                        className={classes.inputWidth}
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        id="input-with-icon-textfield"
                                        margin='dense'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <i class="fas fa-user-graduate"></i>
                                                </InputAdornment>
                                            ),
                                            }}
                                        required/>

                        <TextField  variant="standard"
                                    name="lastName" 
                                    type="text" 
                                    placeholder='Last Name' 
                                    className={classes.inputWidth}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    id="input-with-icon-textfield"
                                    margin='dense'
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <i class="fas fa-user-circle"></i>
                                            </InputAdornment>
                                        ),
                                        }}
                                    required/>                                

                            <TextField  variant="standard"
                                        name="email" 
                                        type="email" 
                                        placeholder='Email' 
                                        className={classes.inputWidth}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        id="input-with-icon-textfield"
                                        margin='dense'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <i class="fas fa-at"></i>
                                                </InputAdornment>
                                            ),
                                            }}
                                        required/>

                            <TextField  variant="standard"
                                        name="Password" 
                                        type="password" 
                                        placeholder='Password' 
                                        className={classes.inputWidth}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        id="input-with-icon-textfield"
                                        margin='dense'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <i class="fas fa-key"></i>
                                                </InputAdornment>
                                            ),
                                            }}
                                        required/>
                        
                        <Box component="p" sx={{py: 2, fontSize: "0.9em"}}>
                            Already have an account? <a href="#">Login</a>
                        </Box>
                        
                        <Button onClick={(e) => register(e)}
                                sx={{my:2, width:1}}>
                            Register
                        </Button>
                    </form>
                </Container>
            </Paper>  
            </Box>                                      
        </Box>
    )
}