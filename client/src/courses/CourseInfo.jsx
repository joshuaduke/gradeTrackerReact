import React, { useState } from "react";
import { Container, Grid, Box, Button, TextField } from "@mui/material";

import { makeStyles } from "@mui/styles";
import axios from "axios";

const useStyles = makeStyles({
    container:{
        backgroundColor:  "#e4e4e4",
        borderBottom:"1px solid #a8a8a8",
    }
})

export default function CourseInfo(props){
    const classes = useStyles();
    const [newCourseName, setNewCourseName] = useState(props.courseName);

    function handleUpdate(){
        if(newCourseName !== ''){
            const updatedCourseName = {
                name: newCourseName
            }
            axios.patch(`http://localhost:5000/courses/${props.semesterId}/${props.id}`, updatedCourseName)
                .then(()=>{
                    console.log('Course has been updated')
                })
                .catch((err) => {
                    if (err) throw err;
                })
        } else {
            alert('You cannot change the name to nothing');
        }
    }

    function handleDelete(){
        axios.delete(`http://localhost:5000/courses/${props.semesterId}/${props.id}`)
            .then(()=>{
                console.log('Course has been deleted');
                window.location.href = `/${props.semesterId}`
            })
            .catch((err)=>{
                if (err) throw err;
            })
    }

    if(props.deletable === true){
        return(
            <Box className={classes.container}>
                <Container sx={{display: 'flex', justifyContent: 'space-between', py:4}}>
                    <TextField 
                        label="Course Name"
                        onChange={(e) => setNewCourseName(e.target.value)}
                        value={newCourseName}
                    />

                    <Box>
                        <Button color="primary" 
                                variant="text"
                                onClick={handleUpdate}>
                                Update</Button>
                        <Button color="error" 
                                variant="text"
                                onClick={handleDelete}>
                                Delete</Button>
                    </Box>
                </Container>
            </Box>
        )
    } else {
        return(
            <Box className={classes.container}>
                <Container>
                    <Grid container sx={{py:4}}>
                        <Grid xs={3}>
                            <p>{props.courseName}</p>
                        </Grid>
                        <Grid xs={9}>
                            <p>{props.gpa}</p>
                        </Grid>
                        <Grid xs={3}>
                            <p>{props.gradePercentage}</p>
                        </Grid>
                        <Grid xs={9}>
                            <p>{props.gradeLetter}</p>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        )
    }


}