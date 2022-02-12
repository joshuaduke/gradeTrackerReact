import React, { useState } from "react";
import { Box } from "@mui/system";
import { Container, Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
    input:{
        width:"75px"
    },
    border:{
        borderBottom:"1px solid #000",
    }
})

export default function Task(props){
    const classes = useStyles()
    const { semesterId, courseId } = useParams();
    const [labelName, setLabelName] = useState('Need');
    const [changeSpan, setChangeSpan] = useState(' %');
    const [grade, setGrade] = useState(props.weight)

    function addGrade(){
        setLabelName('Grade');
        setChangeSpan(' /100');
        setGrade('');
    }

    function afterFocus(){
        setLabelName('Need');
        setChangeSpan(' %');
        setGrade(props.weight);
    }

    if(props.editable === true){

        return(
            <Container className={classes.border}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Box>
                        <Button sx={{mr:2}} color="error" variant="text">Delete</Button>
                        {props.name}
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
                        <p>{props.name}</p>
                    </Box>
                    <Box>
                        <form>
                            {/* <span>Need</span> */}
                            <br/>
                            {/* <span><input type="number" />%</span> */}
                            <span>
                                <TextField 
                                    className={classes.input}
                                    label={labelName}
                                    
                                    value={grade}
                                    size="small"
                                    id="outline-required"
                                    onFocus={addGrade}
                                    onBlur={afterFocus}
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
                                    {changeSpan}
                            </span>
                        </form>
                    </Box>
                </Box>
            </Container>
        )
    }
}