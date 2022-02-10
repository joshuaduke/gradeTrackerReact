import React, { useState, useEffect } from "react";
import Navbar from "../general/Navbar";
import CourseInfo from "./CourseInfo";
import CoursesStats from "./CoursesStats";
import { Box, Button, Container, Grid, Link, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import jwt from 'jwt-decode';
import axios from "axios";


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
    const navigate = useNavigate();
    const [addCourse, setAddCourse] = useState(false);

    const { semesterId } = useParams();
    const [courses, setCourses] = useState([]);
    const [hasCourses, setHasCourses] = useState(false);

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token) {
            console.log(token);
            const student = jwt(token)
            if(!student) {
                localStorage.removeItem('token')
                window.location.href = '/login'
            } else {
                // retrieve all courses for the semester id
                console.log('Semester ID: '+  semesterId);
                axios.get(`http://localhost:5000/courses/${semesterId}`, {headers: {Authorization: `${token}`}})
                .then((courses)=>{
                    console.log('Courses', courses.data);
                    if(courses.data.length > 0){
                        setHasCourses(true);
                        setCourses(courses.data);
                        
                    }
                })
                .catch((err)=>{
                    if (err) throw err;

                })
            }
        } else {
            window.location.href = '/login'
        }
    }, []);

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
                                <Button onClick={() => navigate(-1)}>
                                    Courses
                                </Button>
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
                        <i className="fas fa-plus-square fa-lg"></i>
                    </button>
                </Box>
            }

            {courses.slice(0).reverse().map((course) => 
                <CourseInfo key={course.courseId}
                        id={course.courseId}
                        courseName={course.courseCode} 
                        gpa={course.gpa} 
                        gradePercentage={course.courseGradePercentage} 
                        gradeLetter={course.courseGradeLetter}
                        deletable={true}
                        />
            )}

            {/* <CourseInfo courseName="WEB 322" 
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
                            /> */}

            <Navbar/>
        </div>
    )
}