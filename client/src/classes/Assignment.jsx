import React from "react";
import { Box } from "@mui/system";
import { Container, Input, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    input:{
        width:"50px"
    },
    border:{
        borderBottom:"1px solid #000",
    }
})

export default function Assignment(props){
    const classes = useStyles()

    return(
        <Container className={classes.border}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Box>
                    <p>{props.title}</p>
                </Box>
                <Box>
                    <form>
                        <span>Need</span>
                        <br/>
                        {/* <span><input type="number" />%</span> */}
                        <span>
                            <TextField 
                                className={classes.input}
                                size="small"
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>  %
                        </span>
                    </form>
                </Box>
            </Box>
        </Container>
    )
}