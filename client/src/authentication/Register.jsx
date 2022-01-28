import React from 'react'
import { Box, Container, InputAdornment, TextField, Button, Paper } from '@mui/material'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    inputWidth:{
        width:'100%',
    },
    inputStyles:{

    }
})

export default function Login(){
    const classes = useStyles();
    return(
        <Box>

        <Box sx={{py:20, px:2, width:1}} textAlign={"center"} position="absolute" top="0px">
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
                        
                        <Button 

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