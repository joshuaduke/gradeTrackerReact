import { Box, Container } from '@mui/material'
import React from 'react'


export default function Login(){
    return(
        <Box sx={{py:20}} position="absolute" bottom="0px">
            <Container>
                <h1>Log In</h1>
                <form>
                    <input type="text" placeholder='Email' required/>
                    <input type="password" placeholder='password' required/>
                    <p>OR</p>
                    <button>Log in with Google</button>
                    <p>Don't have an account? <a href="#">Register</a></p>
                    <button>Log In</button>
                </form>
            </Container>
        </Box>
    )
}