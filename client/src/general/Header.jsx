import React from "react";
import { Container, Grid, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    header:{
        backgroundColor:  "#e4e4e4",
    }
})


export default function Header(props){
    const classes = useStyles();

    return(
        <header className={classes.header}>
            <Container>
                <Grid container sx={{py: 2}} textAlign="left">
                        <Grid item xs={4}>
                            <Link href="#" underline="none">
                                {props.previousPage}
                            </Link>
                        </Grid>
                        <Grid item xs={4} textAlign="center">
                            <p>{props.pageTitle}</p>
                        </Grid>
                        <Grid item xs={4} textAlign="right">
                            <Link href="#" underline="none">Edit</Link>                    
                        </Grid>
                    </Grid>
            </Container>
        </header>
    )
}