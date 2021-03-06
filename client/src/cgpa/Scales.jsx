import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Grid, Link, Box, List, ListItem } from '@mui/material';
import Navbar from '../general/Navbar';

const useStyles = makeStyles({
    headerContainer: {
        backgroundColor:  "#e4e4e4",
    },
    borderBottom:{
        borderBottom:"1px solid #a8a8a8",
    }
})

export default function Scales(){
    const classes = useStyles();

    const senecaScale = {
        Aplus: ['90.0', '4.00'],
        A: ['80.0', '4.00'],
        Bplus: ['75.0', '3.50'],
        B: ['70.0', '3.00'],
        Cplus: ['65.0', '2.50'],
        C: ['60.0', '2.00'],
        Dplus: ['55.0', '1.50'],
        D: ['50.0', '1.00'],
        F: ['00.0', '0.00']
        
    }

    return(
        <div>
            <header className={classes.headerContainer}>
                <Container>
                    <Grid container sx={{py: 2}} textAlign="left">
                            <Grid item xs={4}>
                                <Link href="#" underline="none">
                                    <p> Back </p>
                                </Link>
                            </Grid>
                            <Grid item xs={4} textAlign="center">
                                <p>GPA Scales</p>
                            </Grid>
                            <Grid item xs={4} textAlign="right">
                                <Link href="#">View</Link>                    
                            </Grid>
                        </Grid>
                </Container>
            </header>
            <Box > 
                <List>
                    <ListItem className={classes.borderBottom}>Seneca College</ListItem>
                    <ListItem className={classes.borderBottom}>Ryerson University</ListItem>
                    <ListItem className={classes.borderBottom}>York University  </ListItem>
                </List>

                <Navbar />
            </Box>
        </div>
    )
}