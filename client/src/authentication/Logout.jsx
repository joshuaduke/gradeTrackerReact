import { Button } from "@mui/material";
import axios from "axios";
import React from "react";


export default function Logout(){
    function handleLogout(){
        
        axios.post('http://localhost:5000/auth/logout')
            .then(() => {
                console.log('You have been logged out')
                localStorage.removeItem('token');
                window.location.href  = '/login';
            })
            .catch((err) => {
                if (err) throw err
                console.log('err', err);
            })
    }

    return(
        <Button onClick={handleLogout}>
            Logout 
        </Button>
    )
}