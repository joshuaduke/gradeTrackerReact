import React from "react";
import { Box } from "@mui/system";
import { Container, Button, TextField } from "@mui/material";
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

    if(props.editable === true){

        return(
            <Container className={classes.border}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Box>
                        <Button sx={{mr:2}} color="error" variant="text">Delete</Button>
                        {props.title}
                    </Box>
                    <Box>
                        <form>
                            <span>Weight</span>
                            <br/>
                            {/* <span><input type="number" />%</span> */}
                            <span>
                                <TextField 
                                    className={classes.input}
                                    name="weight"
                                    size="small"
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>  %
                            </span>
                        </form>
                    </Box>
                </Box>
            </Container>
        )

    } else {
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
                                    received="received"
                                    size="small"
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>  %
                            </span>
                        </form>
                    </Box>
                </Box>
            </Container>
        )
    }
}