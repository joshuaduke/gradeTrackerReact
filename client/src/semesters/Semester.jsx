import React, { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import ListItemText from '@mui/material/ListItemText';
import { Container, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import jwt from 'jwt-decode';
import axios from "axios";
import GpaLabel from "../cgpa/GpaLabel";

const useStyles = makeStyles({

    ListItemContainer:{
        display:"inline-block",
        width:"100%",
        padding:"20px 0",
        borderBottom: "1px solid #a8a8a8",
    }
})

export default function Semester(props){
    const classes = useStyles();
    const [semesterName, setSemesterName] = useState(props.name);
    const [currentStudent, setCurrentStudent] = useState({});

    function handleDelete(){
        if(props.isActive === 1){
            alert('Cannot Delete an Active semester');
        } else {
            axios.delete(`http://localhost:5000/semesters/${props.id}`)
            .then((result)=>{
                window.location.href = '/';
            })
            .catch((err) => {
                if (err) throw err;
            })
        }
    }

    function handleUpdate(){
        const updatedName = {
            name: semesterName 
        }

        axios.patch(`http://localhost:5000/semesters/${props.id}`, updatedName)
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            if(err) throw err;
        })
    }

    function navigateCourse(id, isActive){
        console.log(isActive)
        if(isActive === 0){
            const makeSemesterActive = {
                active: 1
            }

            axios.patch(`http://localhost:5000/semesters/${id}`, makeSemesterActive)
            .then((result) => {
                console.log(result);
                console.log('This semester is now active');
                window.location.href = `/courses/${id}`;
            })
            .catch((err) => {
                if(err) throw err;
            })
        } else {
            console.log('This semester is currently active');
            window.location.href = `/courses/${id}`;
        }
    }


    if(props.deletable === true){
        return(
        <div>
            <Box className={classes.ListItemContainer}>
                <Container sx={{display: 'flex', justifyContent: 'space-between'}}>
                    {/* <ListItemText>{props.name}</ListItemText> */}
                    <TextField 
                        label="Semester Name" 
                        onChange={(e) => setSemesterName(e.target.value)}
                        value={semesterName}
                    />
                    <Box>
                        <Button color="primary" variant="text" onClick={handleUpdate}>Update</Button>
                        <Button color="error" variant="text" onClick={() => handleDelete(props.isActive)}>Delete</Button>                        
                    </Box>
                    
                </Container>
            </Box>
        </div>
        )   
    } else if (props.displayCgpa){
        return(
            <div >
                <Box className={classes.ListItemContainer}>
                    <Container sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Box>
                            <ListItemText>{props.name}</ListItemText>
                            <span>0 Credits</span>
                        </Box>
                        <GpaLabel/>
                    </Container>
                </Box>
            </div>
        )
    } else {
        return(
            <div style={ props.isActive === 1 ? {backgroundColor: '#A9A9A9'} : {backgroundColor: '#e4e4e4'}}>
                {/* <Link href="" underline="none" className={classes.ListItemContainer}>

                </Link> */}
                <Box className={classes.ListItemContainer} onClick={() => navigateCourse(props.id, props.isActive)}>
                        <Container>
                            <ListItemText>{props.name}</ListItemText>            
                        </Container>
                    </Box>
            </div>
        )     
    }

}