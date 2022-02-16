import React, { useState } from "react";
import { Box, Link, Container, Button, TextField } from "@mui/material";
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
    const [weight, setWeight] = useState(props.weight);
    const [dontBtn, setDontBtn] = useState(false);

    function addGrade(){
        setLabelName('Grade');
        setChangeSpan(' /100');
        setWeight('');
        setDontBtn(true)
    }

    function afterFocus(){
        setLabelName('Need');
        setChangeSpan(' %');
        setWeight(props.weight);
        setDontBtn(false);
    }

    function handleDelete(){
        alert('Clicked');
    }

    if(props.editable === true){

        return(
            <Container className={classes.border}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Box>
                        {/* <Button sx={{mr:2}} color="error" variant="text" onClick={handleDelete}>Delete</Button> */}
                        {props.name}
                    </Box>
                    <Box>
                            <form>
                                <span>Weight</span>
                                <br/>
                                <p> {weight} % </p>

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
                                    
                                    value={weight}
                                    size="small"
                                    id="outline-required"
                                    onFocus={addGrade}
                                    onBlur={afterFocus}
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
                                    {changeSpan}

                            { dontBtn && <Button>Done</Button>}
                                
                            </span>
                        </form>
                    </Box>
                </Box>
            </Container>
        )
    }
}