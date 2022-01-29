import React from 'react'
import { Box, Container, Grid, Link } from '@mui/material'
import Header from '../general/Header'
import Navbar from '../general/Navbar'
import ClassStats from './ClassStats'
import Assignment from './Assignment'
import { makeStyles } from '@mui/styles'

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

export default function Class(){
    const classes = useStyles()
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
                                <Link href="/Courses/1/edit">Edit</Link>                    
                            </Grid>
                        </Grid>
                </Container>
            </header>
            <ClassStats/>
            <Assignment title="Assignment 1"/>
            <Assignment title="Assignment 2"/>
            <Assignment title="Assignment 3"/>
            <Navbar />
        </Box>
    )
}