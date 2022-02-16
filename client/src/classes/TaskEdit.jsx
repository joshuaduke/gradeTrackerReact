import { useState } from "react";
import Navbar from "../general/Navbar";
import { useParams } from "react-router-dom";
import { Box, Container, Grid, Link, TextField, Button} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import jwt from 'jwt-decode';
import axios from "axios";
import { useEffect } from "react";

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

export default function TaskEdit(){
    const { taskId } = useParams();
    const classes = useStyles();
    const navigate = useNavigate();
    const [currentTask, setCurrentTask] = useState({}); 
    const [updatedName, setUpdatedName] = useState('');
    const [updatedWeight, setUpdatedWeight] = useState('');
    // const [taskName ]

    useEffect(()=>{
        const token = localStorage.getItem('token')
        console.log(taskId)

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
                axios.get(`http://localhost:5000/task/${taskId}`, {headers: {Authorization: `${token}`}})
                    .then((task)=>{
                        console.log(task.data);
                        setCurrentTask(task.data[0]);
                        setUpdatedName(task.data[0].taskName);
                        setUpdatedWeight(task.data[0].taskWeight);
                        console.log(typeof currentTask.taskName)
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            }
        } else {
            window.location.href = '/login';
        }
    }, [])

    function updateTask(){
        const updatedTask = {
            id: taskId,
            name: updatedName,
            weight: updatedWeight
        }
        axios.patch(`http://localhost:5000/task/${taskId}`, updatedTask)
            .then(()=>{
                console.log('Task has been updated succesfully');
                navigate(-1);
            })
            .catch((err) =>{
                if (err) throw err;
            })
    }
    console.log(currentTask);
    console.log(updatedName);
    return(
        <Box>
            <header className={classes.headerContainer}>
                <Container>
                    <Grid container sx={{py: 2}} textAlign="left">
                            <Grid item xs={4}>
                                <Link onClick={() => navigate(-1)} underline="none">
                                    Tasks
                                </Link>
                            </Grid>
                            <Grid item xs={4} textAlign="center">
                                Class Name
                            </Grid>
                            <Grid item xs={4} textAlign="right">
                                <Button onClick={updateTask}>Save</Button>                    
                            </Grid>
                        </Grid>
                </Container>
            </header>
            <Container>
                <h1>Joshua Duke</h1>
                <form>
                    <TextField  name="name"
                                id="outlined-basic"
                                variant="outlined"                                
                                value={updatedName} 
                                onChange={(e) => setUpdatedName(e.target.value)}      
                    />
                    <TextField  name="weight" 
                                id="outlined-basic"
                                variant="outlined"
                                placeholder={currentTask.taskWeight}   
                                value={updatedWeight}
                                onChange={(e) => setUpdatedWeight(e.target.value)}
                                />
                </form>
            </Container>    
            
        </Box>
    )
}