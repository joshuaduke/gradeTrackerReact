import React, { useState }from 'react';
import {Box, Button, TextField, Container, 
        Grid, Link, Modal, Typography, 
        RadioGroup, FormControl,
        Radio, FormControlLabel} from '@mui/material';
import Navbar from '../general/Navbar';
import Task from './Task';
import { makeStyles } from '@mui/styles';

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
    const [ addClass, setAddClass ] = useState(false);
    const [openModal , setOpenModal] = useState(false);
    const [radioValue, setRadioValue] = useState('single');

    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

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

    return(
        <Box>
            <header className={classes.headerContainer}>
                <Container>
                    <Grid container sx={{py: 2}} textAlign="left">
                            <Grid item xs={4}>
                                <Link href="/Courses" underline="none">
                                    Courses
                                </Link>
                            </Grid>
                            <Grid item xs={4} textAlign="center">
                                Class Name
                            </Grid>
                            <Grid item xs={4} textAlign="right">
                                <Link href="/Courses/1">Done</Link>                    
                            </Grid>
                        </Grid>
                </Container>
            </header>
            <Box textAlign={'center'}>
                <p>Total Possible</p>
                <h2>100%</h2>
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
                            <TextField variant="standard" label="Task Name" name='singleTaskName' size='small'/>
                            <TextField variant="standard" label="Weight" name="singleWeight" size='small'/>
                        </Box>
                        
                        <Button variant="contained">Add </Button>
                    </Box>
                }

                { radioValue === 'grouped' && 
                    <Box>
                        <Box>
                            <TextField variant="standard" label="Task Name" name='groupedTaskName' size='small'/>
                            <TextField variant="standard" label="Quantity" name="quantity" size='small'/>
                            <TextField variant="standard" label="Total Weigt" name="totalWeight" size='small'/>

                        </Box>
                        
                        <Button variant="contained">Add </Button>
                    </Box>
                }

            </Box>
            </Modal>
            {/* {addClass && 
                <Box sx={{py:3, display:'flex', justifyContent:'center'}}>
                <Button size="small" 
                    color={'error'}
                    onClick={()=> handleNewClass('cancel')}>Cancel</Button>
                    
                    <TextField  sx={{mx:3}} 
                            id="standard-basic" 
                            label="Task Name" 
                            variant="standard" 
                            required/>
                    <Button size="small">Add</Button>
                </Box> } */}

            {!addClass &&
                <Box sx={{py:4}} textAlign={"center"} width="100%">
                    <button onClick={handleOpen}>
                        <p>NEW TASK</p>
                        <i className="fas fa-plus-square fa-lg"></i>
                    </button>
                </Box>
            }

            <Task title="Assignment 1" editable={true}/>
            <Task title="Assignment 2" editable={true}/>
            <Task title="Assignment 3" editable={true}/>
            <Navbar />
        </Box>
    )
}