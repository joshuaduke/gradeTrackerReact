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
        <Box sx={{display: "flex", justifyContent: "center"}}>
            <Box   
                sx={{py:20, width:1}} 
                textAlign={"center"} 
                position="absolute" 
                top="0px">

                <h1>Joshua Duke</h1>
                <p>Insert Logo Here</p>
            </Box>

            <Box sx={{py:20, px:2}} position="absolute" bottom="0px" >
                <Container>
                    <h1>Login</h1>
                </Container>

                <Paper>
                    <Container>
                        <form>
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
                                                        
                            <Button sx={{my:2, width:1}}>
                                Login
                            </Button>

                            <Box textAlign={"center"}>
                                <Box component="p" sx={{pb:1, fontSize: "0.7em"}}>
                                    Or, login with...
                                </Box>
                                <button>Login with Google</button>
                            </Box>  

                            <Box component="p" sx={{py: 2, fontSize: "0.9em"}} textAlign={"center"}>
                                Don't have an account? <a href="#">Login</a>
                            </Box>
                        </form>
                    </Container>
                </Paper>  
            </Box>                                      
        </Box>
    )
}