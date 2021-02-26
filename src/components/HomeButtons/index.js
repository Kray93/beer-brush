import { React } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";



const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            paddingTop: 10,
            
        },
    },
    butGrid: {
        "& > *": {
            marginLeft: 10,
            marginRight: 10,
            // Mobile View
            [theme.breakpoints.down('sm')]: {
                margin:12,
            },


        },
    },
    but: {
        "& > *": {
            width: 175,
            padding: 15,
            // smaller screens/tablets
            [theme.breakpoints.down('sm')]: {
                width:135,
                padding:20,
            },
            // Mobile View
            [theme.breakpoints.down('xs')]: {
                padding:40,
            },

        },
    },
}));

export default function ContainedButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container justify="center" >
                <Grid className={classes.butGrid} container item justify="center" sm={3} >
                    <Button className={classes.but} variant='contained' color='primary' >Events</Button>
                </Grid>
                <Grid className={classes.butGrid} container item justify="center" sm={3} >
                    <Button className={classes.but} variant='contained' color='primary' >Store</Button>
                </Grid>
                <Grid className={classes.butGrid} container item justify="center" sm={3}>
                    <Button className={classes.but} variant='contained' color='primary' >Lessons</Button>
                </Grid>
                <Grid className={classes.butGrid} container item justify="center" sm={3}>
                    <Button className={classes.but} variant='contained' color='primary' >Gallery</Button>
                </Grid>
            </Grid>
        </div>
    );
}