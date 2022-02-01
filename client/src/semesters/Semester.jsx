import React from "react";
import Link from "@mui/material/Link";
import ListItemText from '@mui/material/ListItemText';
import { Container, Button } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
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
    if(props.deletable === true){
        return(
        <div>
            <Box className={classes.ListItemContainer}>
                <Container sx={{display: 'flex'}}>
                    <ListItemText>{props.name}</ListItemText>
                    <Button color="error" variant="text">Delete</Button>
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