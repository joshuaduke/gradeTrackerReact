import React from "react";
import Header from "../general/Header";
import Navbar from "../general/Navbar";
import CourseInfo from "./CourseInfo";
import CoursesStats from "./CoursesStats";
import { Button, Container, Grid, Link } from "@mui/material";
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

    return(
        <div>
            <header className={classes.headerContainer}>
                <Container>
                    <Grid container sx={{py: 2}} textAlign="left">
                            <Grid item xs={4}>
                                <Link href="/" underline="none">
                                    Semester Name
                                </Link>
                            </Grid>
                            <Grid item xs={4} textAlign="center">
                                <p>Courses</p>
                            </Grid>
                            <Grid item xs={4} textAlign="right">
                                <Link href="/Courses/edit">Edit</Link>                    
                            </Grid>
                        </Grid>
                </Container>
            </header>
            <CoursesStats/>

            <Link href="/courses/1">
                <CourseInfo courseName="WEB 322" 
                        gpa="3.0" 
                        gradePercentage="88.9" 
                        gradeLetter="A"/>
            </Link>

            <Link href="/courses/2">
                <CourseInfo courseName="GAM 537" 
                            gpa="4.0" 
                            gradePercentage="95" 
                            gradeLetter="A+"/>
            </Link>

            <Navbar/>
        </div>
    )
}