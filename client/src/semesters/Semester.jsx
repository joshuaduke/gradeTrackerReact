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
        backgroundColor:  "#e4e4e4",
        padding:"20px 0",
        borderBottom: "1px solid #a8a8a8",
    }
})

export default function Semester(props){
    const classes = useStyles();
    const [semesterName, setSemesterName] = useState(props.name);
    const [currentStudent, setCurrentStudent] = useState({});

    // useEffect(()=>{
    //     const token = localStorage.getItem('token')
    //     if(token) {
    //         console.log(token);
    //         const student = jwt(token)
    //         setCurrentStudent(student);

    //         if(!student) {
    //             localStorage.removeItem('token')
    //             window.location.href = '/login'
    //         } else {

    //         }
    //     } else {
    //         window.location.href = '/login'
    //     }
    // },[])

    function handleDelete(){
        axios.delete(`http://localhost:5000/semesters/${props.id}`)
        .then((result)=>{
            window.location.href = '/';
        })
        .catch((err) => {
            if (err) throw err
        })
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
                    <Button color="error" variant="text" onClick={handleDelete}>Delete</Button>
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
            <div >
                <Link href="" underline="none" className={classes.ListItemContainer}>
                    <Box >
                        <Container>
                            <ListItemText>{props.name}</ListItemText>            
                        </Container>
                    </Box>
                </Link>
            </div>
        )     
    }

}