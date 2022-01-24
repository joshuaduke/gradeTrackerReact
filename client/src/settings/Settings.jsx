import React from 'react';
import { Box } from '@mui/system';
import { List, ListItem } from '@mui/material';
import Navbar from '../general/Navbar';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    borderBottom:{
        borderBottom:"1px solid #a8a8a8",
    }
})

export default function Settings(){
    const classes = useStyles();

    return(
        <Box > 
            <Box textAlign={"center"}> 
                <h2>GPA Tracker</h2>
                <p>Joshua Duke</p>
            </Box>
            <Box>
                <List>
                    <ListItem className={classes.borderBottom}>Theme</ListItem>
                    <ListItem className={classes.borderBottom}>Email</ListItem>
                    <ListItem className={classes.borderBottom}>Contact Me  </ListItem>
                </List>
            </Box>
            <footer textAlign={"center"}>
                <p> &copy; Joshua Duke {new Date().getFullYear()}</p>
            </footer>
            <Navbar />
        </Box>
    )
}