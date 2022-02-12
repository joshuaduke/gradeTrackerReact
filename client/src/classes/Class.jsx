import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, Link, Button } from '@mui/material';
import Navbar from '../general/Navbar'
import ClassStats from './ClassStats'
import Task from './Task'
import { makeStyles } from '@mui/styles'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
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
    },
    cursor:{
        cursor: 'pointer',
    }
})

export default function Class(){
    const classes = useStyles();
    const { semesterId, courseId } = useParams();
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        console.log('Course ID:' + courseId)
        const token = localStorage.getItem('token')

        if(token) {
            console.log(token);
            const student = jwt(token)
            if(!student) {
                localStorage.removeItem('token')
                window.location.href = '/login'
            } else {
                // retrieve all tasks by semester and course id
                console.log('Course Id again: '+ courseId);
                axios.get(`http://localhost:5000/courses/${courseId}`, {headers: {Authorization: `${token}`}})
                .then((tasks)=>{
                    console.log(tasks);
                    setTasks(tasks.data);
                    console.log(tasks);
                })
                .catch((err)=>{
                    if(err) throw err;
                })

            }
        } else {
            window.location.href = '/login'
        }

    }, [])

    console.log(`Semester: ${semesterId}, Course: ${courseId}`)

    return(
        <Box>
            <header className={classes.headerContainer}>
                <Container>
                    <Grid container sx={{py: 2}} textAlign="left">
                            <Grid item xs={4}>
                                {/* <Button onClick={() => navigate(-1)}>
                                    Courses
                                </Button> */}
                                <Link className={classes.cursor} onClick={() => navigate(-1)} underline="none">
                                    Courses
                                </Link>
                            </Grid>
                            <Grid item xs={4} textAlign="center">
                                {courseId}
                            </Grid>
                            <Grid item xs={4} textAlign="right">
                                <Link href="/Courses/1/edit">Edit</Link>                    
                            </Grid>
                        </Grid>
                </Container>
            </header>
            <ClassStats/>

            {tasks.slice(0).reverse().map((task) => 
                <Task key={task.taskId}
                        id={task.taskId}
                        courseId={task.courseId} 
                        name={task.taskName} 
                        weight={task.taskWeight} 
                        grade={task.taskGrade} 
                        />
            )}

            <Navbar />
        </Box>
    )
}