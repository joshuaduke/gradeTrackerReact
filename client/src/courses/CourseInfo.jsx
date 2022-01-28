import React from "react";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container:{
        backgroundColor:  "#e4e4e4",
        borderBottom:"1px solid #a8a8a8",
    }
})

export default function CourseInfo(props){
    const classes = useStyles();

    return(
        <Box className={classes.container}>
            <Container>
                <Grid container sx={{py:4}}>
                    <Grid xs={2}>
                        <p>{props.courseName}</p>
                    </Grid>
                    <Grid xs={10}>
                        <p>{props.gpa}</p>
                    </Grid>
                    <Grid xs={2}>
                        <p>{props.gradePercentage}</p>
                    </Grid>
                    <Grid xs={10}>
                        <p>{props.gradeLetter}</p>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}