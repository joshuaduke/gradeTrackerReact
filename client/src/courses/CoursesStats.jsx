import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    borderBottom:{
        borderBottom:"1px solid #a8a8a8"
    },
    border:{
        borderRight:"1px solid #a8a8a8",
    },
    container:{
        backgroundColor:  "#e4e4e4",
    }
})

export default function CoursesStats(){
    const classes = useStyles()

    return(
        <Grid   container 
                textAlign={"center"} 
                className={`${classes.container} ${classes.borderBottom}`}
                sx={{py: 4}}>

            <Grid className={classes.border} item xs={4}>
                <Box>
                    <p>CGPA</p>
                    <p>Insert Data</p>
                </Box>
            </Grid>
            <Grid className={classes.border} item xs={4}>
                <Box>
                    <p>GPA</p>
                    <p>Insert Data</p>
                </Box>


            </Grid>
            <Grid item xs={4}>
                <Box>
                    <p>AVG</p>
                    <p>Insert Data</p>
                </Box>
            </Grid>
        </Grid>
    )
}