import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Semester from "./Semester";
import Navbar from "../general/Navbar";
import Header from "../general/Header";
import { makeStyles } from "@mui/styles";
import { Button, Container, Grid, Link } from "@mui/material";
import Logout from  '../authentication/Logout';
import jwt from 'jwt-decode';

const useStyles = makeStyles({
    border:{
        borderRight:"1px solid black"
    },
    container:{
        backgroundColor:  "red",
    },
    headerContainer:{
        backgroundColor:  "#e4e4e4",
    }
})

export default function Semesters(){
    const classes = useStyles();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            console.log(token);
            const student = jwt(token)
            if(!student) {
                localStorage.removeItem('token')
                window.location.href = '/login'
            } else {
                //retrieve all semesters
                //retrieveSemesters
                console.log('Retrieve semesters')
            }
        } else {
            window.location.href = '/login'
        }
    }, [])

    return(
        <div>
            <header className={classes.headerContainer}>
                <Container>
                    <Grid container sx={{py: 2}} textAlign="left">
                            <Grid item xs={4}>
                                <Link href="/Courses" underline="none">
                                    <p>Close</p>
                                </Link>
                            </Grid>
                            <Grid item xs={4} textAlign="center">
                                <p>Semesters</p>
                            </Grid>
                            <Grid item xs={4} textAlign="right">
                                <Link href="/Semesters/edit">Edit</Link>                    
                            </Grid>
                        </Grid>
                </Container>
            </header>
            
            <Box textAlign={"center"} sx={{py:3}}>
                <p>Tap a Semester to make it the current Semester</p>
            </Box>

            <Logout />
            
            <Semester name="Winter 2022"/>
            <Semester name="Fall 2021"/>
            <Semester name="Summer 2021"/>
        </div>
    )
}