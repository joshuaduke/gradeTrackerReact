import React, { useState } from "react";
import Navbar from "../general/Navbar";
import CourseInfo from "./CourseInfo";
import CoursesStats from "./CoursesStats";
import { Box, Button, Container, Grid, Link, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

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

export default function Courses(){
    const classes = useStyles();
    const [addCourse, setAddCourse] = useState(false);

    function displayAddCourse(){
        setAddCourse(true);
    }

    function handleNewCourse(option){
        if(option === 'cancel'){
            setAddCourse(false);
        } else if (option === 'add'){

        }
    }

    return(
        <div>
            <header className={classes.headerContainer}>
                <Container>
                    <Grid container sx={{py: 2}} textAlign="left">
                            <Grid item xs={4}>
                                <Link href="/Courses" underline="none">
                                    Course Name
                                </Link>
                            </Grid>
                            <Grid item xs={4} textAlign="center">
                                <p>Courses</p>
                            </Grid>
                            <Grid item xs={4} textAlign="right">
                                <Link href="/Courses">Done</Link>                    
                            </Grid>
                        </Grid>
                </Container>
            </header>

            <CoursesStats/>

            {addCourse && 
                <Box sx={{py:3, display:'flex', justifyContent: "center"}}>
                    <Button size="small" color={"error"} onClick={()=> handleNewCourse('cancel')}>Cancel</Button>
                    <TextField  sx={{mx:3}} 
                            id="standard-basic" 
                            label="Semester Name" 
                            variant="standard" 
                            required/>
                    <Button size="small" onClick={()=> handleNewCourse('add')}>Add</Button>
                </Box> }

            {!addCourse && 
                <Box sx={{py:4}} textAlign={"center"} width="100%">
                    <button onClick={displayAddCourse}>
                        <p>NEW COURSE</p>
                        <i class="fas fa-plus-square fa-lg"></i>
                    </button>
                </Box>
            }

            <CourseInfo courseName="WEB 322" 
                        gpa="3.0" 
                        gradePercentage="88.9" 
                        gradeLetter="A"
                        deletable={true}
                        />

            <CourseInfo courseName="GAM 537" 
                            gpa="4.0" 
                            gradePercentage="95" 
                            gradeLetter="A+"
                            deletable={true}
                            />

            <Navbar/>
        </div>
    )
}