import React from "react";
import { Container, Grid, Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    NavContainer:{
        backgroundColor:  "#e4e4e4",
    }
})

export default function Navbar(){
    const classes = useStyles();

    return(
        <Box className={classes.NavContainer} position="absolute" bottom="0px" width="100%">
            <Container>
                <Grid container sx={{py:3}} textAlign={"center"}>
                    <Grid item xs={4}>
                        <Link href="/Courses" underline="none">
                            <i class="fas fa-school"></i>
                            <p>Courses</p>
                        </Link>
                        
                    </Grid>

                    <Grid item xs={4}>
                        <Link href="#" underline="none">
                            <i class="fas fa-graduation-cap"></i>
                            <p>CGPA</p>
                        </Link>
                    </Grid>
                    
                    <Grid item xs={4}>
                        <Link href="/Settings" underline="none">
                            <i class="fas fa-cog"></i>
                            <p>Settings</p>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}