import React, { useEffect, useState } from "react";
import Header from "../general/Header";
import Navbar from "../general/Navbar";
import CourseInfo from "./CourseInfo";
import CoursesStats from "./CoursesStats";
import { Button, Container, Grid, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import jwt from 'jwt-decode';
import { useParams } from "react-router-dom";
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
    //retrieve Url parameters (semester ID)
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
                        console.log(courses);
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

    return(
        <div>
            <header className={classes.headerContainer}>
                <Container>
                    <Grid container sx={{py: 2}} textAlign="left">
                            <Grid item xs={4}>
                                <Link href="/" underline="none">
                                    Semesters
                                </Link>
                            </Grid>
                            <Grid item xs={4} textAlign="center">
                                <p>Courses</p>
                            </Grid>
                            <Grid item xs={4} textAlign="right">                   
                                <Link href={`/courses/${semesterId}/edit`}>Edit</Link>                    
                            </Grid>
                        </Grid>
                </Container>
            </header>
            <CoursesStats/>

            {courses.slice(0).reverse().map((course) => 
            <CourseInfo key={course.courseId}
                        id={course.courseId}
                        courseName={course.courseCode} 
                        gpa={course.gpa} 
                        gradePercentage={course.courseGradePercentage} 
                        gradeLetter={course.courseGradeLetter}
                        />
            )}

            {/* <Link href="/courses/1">
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
            </Link> */}

            <Navbar/>
        </div>
    )
}