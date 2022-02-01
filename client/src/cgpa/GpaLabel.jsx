import { Box } from '@mui/material';
import React, {useState} from 'react';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    boxStyles: {
        padding:'0 15px',
        color:'#000',
    }, 
})

export default function GpaLabel(){
    const classes= useStyles();
    // const [gpaBackgroundColour, setGpaBackgroundColour] = useState();
    const gpa = 'D';
    let gpaBackgroundColour = '';

switch (gpa) {
    case 'A':
        gpaBackgroundColour = 'green';
        break;
    case 'B':
        gpaBackgroundColour = 'Yellow';
        break;
    case 'D':
        gpaBackgroundColour = 'Red';
        break;

    default:
        gpaBackgroundColour = '#e4e4e4';
        break;
}
    return(
        <Box >
            <p className={classes.boxStyles}
            style={{backgroundColor: gpaBackgroundColour}} >133</p>
        </Box>
    )
}