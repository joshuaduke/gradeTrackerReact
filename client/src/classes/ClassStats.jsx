import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    border:{
        borderRight:"1px solid black"
    },
    container:{
        backgroundColor:  "red",
    }
})

export default function ClassStats(){
    const classes = useStyles();

    return(
        <Grid container 
                textAlign={"center"} 
                className={classes.container}
                sx={{py: 4}}>
            <Grid className={classes.border} item xs={3}>
                <Box>
                    <p>CGPA</p>
                    <p>3.29</p>
                </Box>
            </Grid>
            <Grid className={classes.border} item xs={3}>
                <Box>
                    <p>GPA</p>
                    <p>3.1</p>
                </Box>
            </Grid>
            <Grid className={classes.border} item xs={3}>
                <Box>
                    <p>Grade</p>
                    <p>B</p>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box>
                    <p>Target</p>
                    <p>73.95%</p>
                </Box>
            </Grid>
        </Grid>
    )
}