import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Semester from "./Semester";
import { makeStyles } from "@mui/styles";
import { Button, Container, Grid, Link } from "@mui/material";
import Logout from  '../authentication/Logout';
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

export default function Semesters(){
    const classes = useStyles();
    const [semesters, setSemesters] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            console.log(token);
            const student = jwt(token)
            if(!student) {
                localStorage.removeItem('token')
                window.location.href = '/login'
            } else {
                //retrieve all semesters
                console.log('Retrieve semesters')
                console.log(student);
                axios.get('http://localhost:5000/semesters', {headers: {Authorization: `${token}`}})
                    .then((result)=>{
                        console.log('result');
                        console.log(result)
                        setSemesters(result.data);
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            }
        } else {
            window.location.href = '/login'
        }
    }, [])

    function navigateCourse(e, id, isActive){
        alert('Hello');
        if(isActive === 0){
            const makeSemesterActive = {
                active: 1
            }

            axios.patch(`http://localhost:5000/semesters/${id}`, makeSemesterActive)
            .then((result) => {
                console.log(result);
                console.log('This semester is now active');
                //redirect to Courses page 
            })
            .catch((err) => {
                if(err) throw err;
            })
        } else {
            console.log('This semester is currently active');
        }
    }

    return(
        <div>
            <header className={classes.headerContainer}>
                <Container>
                    <Grid container sx={{py: 2}} textAlign="left">
                            <Grid item xs={4}>
                                <Link href="/Courses" underline="none">
                                    <p>Close</p>
                                </Link>
                            </Grid>
                            <Grid item xs={4} textAlign="center">
                                <p>Semesters</p>
                            </Grid>
                            <Grid item xs={4} textAlign="right">
                                <Link href="/Semesters/edit">Edit</Link>                    
                            </Grid>
                        </Grid>
                </Container>
            </header>
            
            <Box textAlign={"center"} sx={{py:3}}>
                <p>Tap a Semester to make it the current Semester</p>
            </Box>

            <Logout />
            
            {semesters.slice(0).reverse().map((semester) => <Semester 
                                                                onClick={() => navigateCourse(semester.semesterId, semester.active)}
                                                                key={semester.semesterId} 
                                                                id={semester.semesterId} 
                                                                name={semester.semesterName}
                                                                isActive={semester.active}/>)}

        </div>
    )
}