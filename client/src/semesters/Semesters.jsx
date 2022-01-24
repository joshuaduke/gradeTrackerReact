import React from "react";
import Box from "@mui/material/Box";
import Semester from "./Semester";
import Navbar from "../general/Navbar";
import Header from "../general/Header";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    border:{
        borderRight:"1px solid black"
    },
    container:{
        backgroundColor:  "red",
    }
})

export default function Semesters(){
    const classes = useStyles();

    return(
        <div>
            <Header pageTitle="Semesters" previousPage="Close"/>
            
            <Box  textAlign={"center"} sx={{py:3}}>
                <p>Tap a Semester to make it the current Semester</p>
            </Box>
            
            <Semester name="Winter 2022"/>
            <Semester name="Fall 2021"/>
            <Semester name="Summer 2021"/>
            <Navbar />
        </div>
    )
}