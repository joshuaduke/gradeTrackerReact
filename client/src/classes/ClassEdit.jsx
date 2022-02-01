import React, { useState }from 'react';
import { Box, Button, TextField, Container, Grid, Link, Modal, Typography } from '@mui/material';
import Navbar from '../general/Navbar';
import Assignment from './Assignment';
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
    const [open , setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function displayAddClass(){
        setAddClass(true);
    }

    function handleNewClass(option){
        if(option === 'cancel'){
            setAddClass(false);
        } else if (option === 'add'){

        }
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
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Add a new Task
                </Typography>
                
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
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
                        <i class="fas fa-plus-square fa-lg"></i>
                    </button>
                </Box>
            }

            <Assignment title="Assignment 1" editable={true}/>
            <Assignment title="Assignment 2" editable={true}/>
            <Assignment title="Assignment 3" editable={true}/>
            <Navbar />
        </Box>
    )
}