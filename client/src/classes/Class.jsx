import React from 'react'
import { Box } from '@mui/system'
import Header from '../general/Header'
import Navbar from '../general/Navbar'
import ClassStats from './ClassStats'
import Assignment from './Assignment'

export default function Class(){
    return(
        <Box>
            <Header pageTitle="WEB 322" previousPage='Courses'/>
            <ClassStats/>
            <Assignment title="Assignment 1"/>
            <Assignment title="Assignment 2"/>
            <Assignment title="Assignment 3"/>
            <Navbar />
        </Box>
    )
}