import React from 'react'
import { Box, Container } from '@mui/material'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    inputWidth:{
        width:'100%',
    }
})

export default function Login(){
    const classes = useStyles();
    return(
        <Box sx={{py:20}} position="absolute" bottom="0px">
            <Container>
                <h1>Register In</h1>
                <form>
                    <input  name='firstName' 
                            type='text' 
                            placeholder='First Name' 
                            required/>
                    <input name="lastName" type="password" placeholder='Last Name' required/>
                    <input name="email" type="text" placeholder='Email' className={classes.inputWidth} required/>
                    <input name="password" type="password" placeholder='password' className={classes.inputWidth} required/>
                    <p>OR</p>
                    <button>Register with Google</button>
                    <p>Already have an account? <a href="#">Login</a></p>
                    <button>Register</button>
                </form>
            </Container>
        </Box>
    )
}