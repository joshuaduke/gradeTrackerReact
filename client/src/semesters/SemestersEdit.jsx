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

export default function SemestersEdit(){
    const classes = useStyles();
    const [addSemester, setAddSemester] = useState(false);
    
    function displayAddSemester(){
        setAddSemester(true);
    }

    function handleNewSemester(option){
        if(option === 'cancel'){
            setAddSemester(false);
        } else if (option === 'add'){

        }
    }

    return(
        <div>
            <header className={classes.headerContainer}>
                <Container>
                    <Grid container sx={{py: 2}} textAlign="left">
                            <Grid item xs={4}>
                                <Link href="/" underline="none">
                                    <p>Close</p>
                                </Link>
                            </Grid>
                            <Grid item xs={4} textAlign="center">
                                <p>Semesters</p>
                            </Grid>
                            <Grid item xs={4} textAlign="right">
                                <Link href="/">Done</Link>                    
                            </Grid>
                        </Grid>
                </Container>
            </header>
            
            {addSemester && 
                <Box sx={{py:3, display:'flex', justifyContent:'center'}}>
                <Button size="small" 
                    color={'error'}
                    onClick={()=> handleNewSemester('cancel')}>Cancel</Button>
                    
                    <TextField  sx={{mx:3}} 
                            id="standard-basic" 
                            label="Semester Name" 
                            variant="standard" 
                            required/>
                    <Button size="small">Add</Button>
                </Box> }

            {!addSemester &&
                <Box sx={{py:4}} textAlign={"center"} width="100%">
                    <button onClick={displayAddSemester}>
                        <p>NEW SEMESTER</p>
                        <i class="fas fa-plus-square fa-lg"></i>
                    </button>
                </Box>
            }
            
            <Semester name="Winter 2022" deletable={true}/>
            <Semester name="Fall 2021" deletable={true}/>
            <Semester name="Summer 2021" deletable={true}/>

            {/* <Navbar /> */}
        </div>
    )
}