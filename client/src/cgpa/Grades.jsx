import React, { useState } from "react";
import Box from "@mui/material/Box";
import Semester from "../semesters/Semester";
import Navbar from "../general/Navbar";
import { makeStyles } from "@mui/styles";
import { Button, Container, Grid, Link } from "@mui/material";


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

    return(
        <div>
            <header className={classes.headerContainer}>
                <Container>
                    <Grid container sx={{py: 2}} textAlign="left">
                            <Grid item xs={4}>
                                <Link href="#" underline="none">
                                    <p> Add Grade </p>
                                </Link>
                            </Grid>
                            <Grid item xs={4} textAlign="center">
                                <p>GPA Calculator</p>
                            </Grid>
                            <Grid item xs={4} textAlign="right">
                                <Link href="/Scales">Scales</Link>                    
                            </Grid>
                        </Grid>
                </Container>
            </header>
            
            <Box textAlign={"center"}>
                <h3>3.20</h3>
            </Box>
            
            <Semester name="Winter 2022" displayCgpa={true}/>
            <Semester name="Fall 2021" displayCgpa={true}/>
            <Semester name="Summer 2021" displayCgpa={true}/>
            <Navbar />
        </div>
    )
}