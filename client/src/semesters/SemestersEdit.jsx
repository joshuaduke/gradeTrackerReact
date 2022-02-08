import React, { useState, useEffect } from "react";
import jwt from 'jwt-decode';
import axios from "axios";
import Box from "@mui/material/Box";
import Semester from "./Semester";
import Navbar from "../general/Navbar";
import Header from "../general/Header";
import { makeStyles } from "@mui/styles";
import { Button, Container, Grid, Link, TextField } from "@mui/material";


//Add a new semester and save it to the database
//turn semester name to an input field, change semester name on user input 
//delete a semester by id on delete 

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
    const [semesters, setSemesters] = useState([]);
    const [newSemesterName, setNewSemesterName] = useState('');
    const [currentStudent, setCurrentStudent] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            console.log(token);
            const student = jwt(token)
            setCurrentStudent(student);

            if(!student) {
                localStorage.removeItem('token')
                window.location.href = '/login'
            } else {
                //retrieve all semesters
                console.log('Retrieve semesters')
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
    
    function displayAddSemester(){
        setAddSemester(true);
    }

    function handleNewSemester(option){
        if(option === 'cancel'){
            setAddSemester(false);

        } else if (option === 'add'){

            const credentials = {
                semesterName: newSemesterName,
                gpa: null,
                active: false,
                id: currentStudent.id
            }
    
            axios.post('http://localhost:5000/addSemester', credentials)
                .then( (result) =>{
                    console.log('ADDED DATA')
                    console.log(result.data);
                    const newSemesters = [...semesters, credentials];
                    setSemesters(newSemesters);
                })
                .catch((err)=>{
                    console.log('Err', err);
                })

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
                            onChange={(e) => setNewSemesterName(e.target.value)}
                            value={newSemesterName}
                            required/>
                    <Button size="small"
                            onClick={()=> handleNewSemester('add')}>Add</Button>
                </Box> }

            {!addSemester &&
                <Box sx={{py:4}} textAlign={"center"} width="100%">
                    <button onClick={displayAddSemester}>
                        <p>NEW SEMESTER</p>
                        <i class="fas fa-plus-square fa-lg"></i>
                    </button>
                </Box>
            }
            

            {semesters.slice(0).reverse().map((semester) => 
                <Semester key={semester.semesterId} name={semester.semesterName} deletable={true}/>
            )}

            {/* <Navbar /> */}
        </div>
    )
}