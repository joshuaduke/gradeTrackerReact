import React from "react";
import { Container, Grid, Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
    NavContainer:{
        backgroundColor:  "#e4e4e4",
    }
})

export default function Navbar(props){
    const classes = useStyles();
    
    const {semesterId, courseId } = useParams();
    console.log(semesterId);
    console.log(courseId);
    return(
        <Box className={classes.NavContainer} position="fixed" bottom="0px" width="100%">
            <Container>
                <Grid container sx={{py:3}} textAlign={"center"}>
                    <Grid item xs={4}>
                        <Link href={`/${semesterId}`} underline="none">
                            <i className="fas fa-school"></i>
                            <p>Courses</p>
                        </Link>
                        
                    </Grid>

                    <Grid item xs={4}>
                        <Link href="/Grades" underline="none">
                            <i className="fas fa-graduation-cap"></i>
                            <p>CGPA</p>
                        </Link>
                    </Grid>
                    
                    <Grid item xs={4}>
                        <Link href="/Settings" underline="none">
                            <i className="fas fa-cog"></i>
                            <p>Settings</p>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}