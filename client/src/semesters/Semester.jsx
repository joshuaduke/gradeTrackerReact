import React from "react";
import Link from "@mui/material/Link";
import ListItemText from '@mui/material/ListItemText';
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({

    ListItemContainer:{
        display:"inline-block",
        width:"100%",
        backgroundColor:  "#e4e4e4",
        padding:"20px 0",
        borderBottom: "1px solid #a8a8a8",
    }
})

export default function Semester(props){
    const classes = useStyles();

    return(
        <div >
            <Link href="" underline="none" className={classes.ListItemContainer}>
                <Box >
                    <Container>
                        <ListItemText>{props.name}</ListItemText>
                    </Container>
                </Box>
            </Link>
        </div>
    )
}