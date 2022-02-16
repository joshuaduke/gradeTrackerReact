import React, { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import axios from "axios";
import jwt from 'jwt-decode';

const useStyles = makeStyles({
    border:{
        borderRight:"1px solid black"
    },
    container:{
        backgroundColor:  "red",
    }
})

export default function ClassStats(){
    const classes = useStyles();
    const { semesterId, courseId } = useParams();
    const [course, setCourse] = useState({});
    const [newTargetGrade, setNewTargetGrade] = useState('');

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
                // console.log('Semester ID: '+  semesterId);
                axios.get(`http://localhost:5000/courses/${semesterId}/${courseId}`, {headers: {Authorization: `${token}`}})
                .then((course)=>{
                    console.log('Course: ', course);
                    setCourse(course);
                })
                .catch((err)=>{
                    if (err) throw err;

                })
            }
        } else {
            window.location.href = '/login';
        }
    }, [])

    function updateCourseTarget(){
        const updatedTargetGrade = {
            targetGrade: newTargetGrade
        }
        axios.patch(`http://localhost:5000/updateTargetGrade/${courseId}`, updatedTargetGrade)
            .then(() => {
                console.log('Target Grade has been updated')
            })
            .catch((err) =>{
                if (err) throw err;
            })
    }

    return(
        <Grid container 
                textAlign={"center"} 
                className={classes.container}
                sx={{py: 4}}>
            <Grid className={classes.border} item xs={3}>
                <Box>
                    <p>CGPA</p>
                    <p>Insert Data</p>
                </Box>
            </Grid>
            <Grid className={classes.border} item xs={3}>
                <Box>
                    <p>GPA</p>
                    <p>{course.gpa}</p>
                    {/* <p>{course.courseGradeLetter === undefined ? '' : course.courseGradeLetter}</p> */}
                </Box>
            </Grid>
            <Grid className={classes.border} item xs={3}>
                <Box>
                    <p>Grade</p>
                    <p>{course.courseGradeLetter}</p>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box>
                    <p>Target</p>
                    <TextField 
                        id="standard-basic"
                        variant="standard"
                        size="small"
                        value={newTargetGrade}
                        onChange={(e) => setNewTargetGrade(e.target.value)}
                        onBlur={updateCourseTarget}
                    />
                    <p>{course.courseTargetGrade}</p>
                </Box>
            </Grid>
        </Grid>
    )
}