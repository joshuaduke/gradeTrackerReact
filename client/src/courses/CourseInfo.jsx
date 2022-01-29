import React from "react";
import { Container, Grid, Box, Button } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container:{
        backgroundColor:  "#e4e4e4",
        borderBottom:"1px solid #a8a8a8",
    }
})

export default function CourseInfo(props){
    const classes = useStyles();

    if(props.deletable === true){
        return(
            <Box className={classes.container}>
                <Container sx={{display: 'flex'}}>
                    <Grid container sx={{py:4}}>
                        <Grid xs={3}>
                            <p>{props.courseName}</p>
                        </Grid>
                        <Grid xs={9}>
                            <p>{props.gpa}</p>
                        </Grid>
                        <Grid xs={3}>
                            <p>{props.gradePercentage}</p>
                        </Grid>
                        <Grid xs={9}>
                            <p>{props.gradeLetter}</p>
                        </Grid>
                    </Grid>
                    <Button color="error" variant="text">Delete</Button>
                </Container>
            </Box>
        )
    } else {
        return(
            <Box className={classes.container}>
                <Container>
                    <Grid container sx={{py:4}}>
                        <Grid xs={3}>
                            <p>{props.courseName}</p>
                        </Grid>
                        <Grid xs={9}>
                            <p>{props.gpa}</p>
                        </Grid>
                        <Grid xs={3}>
                            <p>{props.gradePercentage}</p>
                        </Grid>
                        <Grid xs={9}>
                            <p>{props.gradeLetter}</p>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        )
    }


}