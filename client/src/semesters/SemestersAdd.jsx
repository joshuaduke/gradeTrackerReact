import React, { useState } from "react";
import Box from "@mui/material/Box";
import Semester from "./Semester";
import Navbar from "../general/Navbar";
import Header from "../general/Header";
import { makeStyles } from "@mui/styles";
import { Button, Container, Grid, Link, TextField } from "@mui/material";


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

export default function SemestersAdd(){
    const classes = useStyles();

    return(
        <div>
            <header className={classes.headerContainer}>
                <Container>
                    <Grid container sx={{py: 2}} textAlign="left">
                            <Grid item xs={4}>
                                <Link href="#" underline="none">
                                    <p>Semesters</p>
                                </Link>
                            </Grid>
                            <Grid item xs={4} textAlign="center">
                                <p>New Semester</p>
                            </Grid>
                            <Grid item xs={4} textAlign="right">
                                <Button variant="text" size="small">Save</Button>                    
                            </Grid>
                        </Grid>
                </Container>
            </header>
            
            <Box sx={{py:3}}>
                <TextField  sx={{mx:3}} 
                            id="standard-basic" 
                            label="Semester Name" 
                            variant="standard" 
                            required/>
            </Box>
        </div>
    )
}