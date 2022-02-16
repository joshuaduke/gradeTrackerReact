import React, { useState, useLayoutEffect }from 'react';
import { useParams } from 'react-router-dom';
import {Box, Button, TextField, Container, 
        Grid, Link, Modal, Typography, 
        RadioGroup, FormControl,
        Radio, FormControlLabel} from '@mui/material';
import Navbar from '../general/Navbar';
import Task from './Task';
import { makeStyles } from '@mui/styles';
import jwt from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Class(){
    const classes = useStyles();
    const { semesterId, courseId } = useParams();
    const [ authToken, setAuthToken ] = useState('')
    const [ addClass, setAddClass ] = useState(false);
    const [openModal , setOpenModal] = useState(false);
    const [radioValue, setRadioValue] = useState('single');
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [taskWeight, setTaskWeight] = useState('');
    const [totalWeight, setTotalWeight] = useState(0);
    const [taskQty, setTaskQty] = useState(0);
    const [groupedWeight, setGroupedWeight] = useState(0)
    const navigate = useNavigate();

    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    useLayoutEffect(()=>{
        console.log('Course ID:' + courseId)
        const token = localStorage.getItem('token')

        if(token) {
            console.log(token);
            setAuthToken(token);
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
                    console.log(tasks.data);

                    tasks.data.forEach(task => { 
                        
                        setTotalWeight(prevWeight => prevWeight += parseInt(task.taskWeight))
                        console.log(totalWeight);
                    });
                    // setTotalWeight(totalWeight);
                })
                .catch((err)=>{
                    if(err) throw err;
                })

            }
        } else {
            window.location.href = '/login'
        }

    }, [])

    function displayAddClass(){
        setAddClass(true);
    }

    function handleNewClass(option){
        if(option === 'cancel'){
            setAddClass(false);
        } else if (option === 'add'){

        }
    }

    function handleRadioChange(e){
        setRadioValue(e.target.value);
    }

    function submitTask(){
        if(radioValue === 'single')   {
            // alert(`Task: ${taskName} Weight: ${taskWeight}`);
            const newTask = {
                name: taskName,
                weight: taskWeight
            }
            axios.post(`http://localhost:5000/courses/${courseId}`, newTask)
                .then(()=>{
                    console.log('Create new task');


                    console.log(authToken)
                    axios.get(`http://localhost:5000/courses/${courseId}`, {headers: {Authorization: `${authToken}`}})
                        .then((allTasks)=>{
                            console.log(allTasks);
                            setTasks(allTasks.data);
                            console.log(allTasks.data);
                            let newTotalWeight = 0;

                            allTasks.data.forEach(task => { 

                                setTotalWeight(newTotalWeight += parseInt(task.taskWeight))
                                console.log(totalWeight);
                            });
                            handleClose();
                        })
                        .catch((err)=>{
                            if(err) throw err;
                            window.location.href = '/login';
                        })
                })
                .catch((err)=>{
                    if(err) throw err;
                })

        } else if(radioValue === 'grouped'){
            console.log('grouped');
            let oneTaskWeight = groupedWeight / taskQty;
            let myArr = [];

            for (let i = 0; i < taskQty; i++) {
                
                let myObj = {
                    name: `${taskName} ${i + 1}`,
                    weight: oneTaskWeight,
                }
                myArr.push(myObj);
            }

            axios.post(`http://localhost:5000/courses/many/${courseId}`, myArr)
            .then(()=>{
                console.log('Create new task');
                handleClose();
                console.log(authToken)

                axios.get(`http://localhost:5000/courses/${courseId}`, {headers: {Authorization: `${authToken}`}})
                    .then((allTasks)=>{
                        console.log(allTasks);
                        setTasks(allTasks.data);
                        console.log(allTasks.data);
                        let newTotalWeight = 0;

                        allTasks.data.forEach(task => { 

                            setTotalWeight(newTotalWeight += parseInt(task.taskWeight))
                            console.log(totalWeight);
                        });
                    })
                    .catch((err)=>{
                        if(err) throw err;
                    })
            })
            .catch((err)=>{
                if(err) throw err;
            })
            

        }
    }

    function handleDelete(taskId){
        axios.delete(`http://localhost:5000/courses/${taskId}`)
            .then(()=>{
                console.log('Task has been deleted');
                window.location.href = `/courses/${semesterId}/${courseId}`
            })
            .catch((err)=>{
                if (err) throw err;
            })
    }

    return(
        <Box>
            <header className={classes.headerContainer}>
                <Container>
                    <Grid container sx={{py: 2}} textAlign="left">
                            <Grid item xs={4}>
                                <Link onClick={() => navigate(-1)} underline="none">
                                    Courses
                                </Link>
                            </Grid>
                            <Grid item xs={4} textAlign="center">
                                Class Name
                            </Grid>
                            <Grid item xs={4} textAlign="right">
                               <span></span>                   
                            </Grid>
                        </Grid>
                </Container>
            </header>
            <Box textAlign={'center'}>
                <p>Total Possible</p>
                <h2>{totalWeight}</h2>
            </Box>

            <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Add a new Task
                </Typography>
                
                <FormControl id="new-task-radio-group">
                    <RadioGroup row  
                                aria-labelledby="new-task-radio-group" 
                                name="task-radio-group"
                                value={radioValue}
                                onChange={handleRadioChange}>
                        <FormControlLabel value="single" label="Single Task" control={<Radio />}/>
                        <FormControlLabel value="grouped" label="Grouped Tasks" control={<Radio />}/>
                    </RadioGroup>
                </FormControl>

                { radioValue === 'single' && 
                    <Box>
                        <Box>
                            <TextField  variant="standard" 
                                        label="Task Name" 
                                        name={taskName}
                                        onChange={(e) => setTaskName(e.target.value)}
                                        size='small'/>
                            <TextField  variant="standard" 
                                        label="Weight" 
                                        name={taskWeight}
                                        onChange={(e) => setTaskWeight(e.target.value)}
                                        size='small'/>
                        </Box>
                        
                        <Button variant="contained" onClick={submitTask}>Add </Button>
                    </Box>
                }

                { radioValue === 'grouped' && 
                    <Box>
                        <Box>
                            <TextField  variant="standard" 
                                        label="Task Name" 
                                        name='groupedTaskName' 
                                        onChange={(e) => setTaskName(e.target.value)}
                                        size='small'/>
                            <TextField  variant="standard" 
                                        label="Quantity" 
                                        name="quantity" 
                                        onChange={(e) => setTaskQty(e.target.value)}
                                        size='small'/>
                            <TextField  variant="standard" 
                                        label="Total Weight" 
                                        name="totalWeight" 
                                        size='small'
                                        onChange={(e) => setGroupedWeight(e.target.value)}
                                        />

                        </Box>
                        
                        <Button variant="contained" onClick={submitTask}>Add </Button>
                    </Box>
                }

            </Box>
            </Modal>

            {!addClass &&
                <Box sx={{py:4}} textAlign={"center"} width="100%">
                    <button onClick={handleOpen}>
                        <p>NEW TASK</p>
                        <i className="fas fa-plus-square fa-lg"></i>
                    </button>
                </Box>
            }

            {tasks.slice(0).reverse().map((task) => 
                <div key={task.taskId}>
                    <Button sx={{mr:2}} color="error" variant="text" onClick={() => handleDelete(task.taskId)}>Delete</Button>
                    <Link href={`/tasks/${task.taskId}`} underline="none">
                        <Task 
                                id={task.taskId}
                                courseId={task.courseId} 
                                name={task.taskName} 
                                weight={task.taskWeight} 
                                grade={task.taskGrade} 
                                editable={true}
                                />
                    </Link>
                </div>
            )}

            <Navbar id={semesterId}/>
        </Box>
    )
}

