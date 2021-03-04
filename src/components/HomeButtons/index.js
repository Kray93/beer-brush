import { React } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useHistory } from 'react-router-dom';
import grey from '@material-ui/core/colors/red';

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
    const history = useHistory();
    const classes = useStyles();
    // const clickMypage = (e) => {
    //     // if JWT token and login creds pass for student go to student page
    //     if (condition) {
    //         e.preventDefault();
    //         history.push("/student");
    //     // if JWT token and login creds pass for student go to instructor page
    //     } else if (condition) {
    //         e.preventDefault();
    //         history.push("/instructor");
    //     } else {
    //         return;
    //     }
    // }
    const clickClasses = (e) => {
        e.preventDefault();
        history.push("/classes");
    }
    const clickAbout = (e) => {
        e.preventDefault();
        history.push("/about");
    }
    const clickGallery = (e) => {
        e.preventDefault();
        history.push("/gallery");
    }
    return (
        <div className={classes.root}>
            <Grid container justify="center" >
                <Grid className={classes.butGrid} container item justify="center" sm={3} >
                    <Button 
                    onClick={clickClasses} 
                    className={classes.but} 
                    variant='contained' 
                    style={{ color: grey[50], backgroundColor:"#7b0d00" }} 
                    >
                        Classes
                    </Button>
                </Grid>
                <Grid className={classes.butGrid} container item justify="center" sm={3} >
                    <Button 
                    // onClick={clickMypage} 
                    className={classes.but} 
                    variant='contained' 
                    style={{ color: grey[50], backgroundColor:"#7b0d00" }}
                    >
                        My Page
                    </Button>
                </Grid>
                <Grid className={classes.butGrid} container item justify="center" sm={3}>
                    <Button 
                    onClick={clickAbout}
                    className={classes.but} 
                    variant='contained' 
                    style={{ color: grey[50], backgroundColor:"#7b0d00" }}
                    >
                        About Us
                    </Button>
                </Grid>
                <Grid className={classes.butGrid} container item justify="center" sm={3}>
                    <Button 
                    onClick={clickGallery}
                    className={classes.but} 
                    variant='contained' 
                    style={{ color:grey[50], backgroundColor:"#7b0d00" }}
                    >
                        Gallery
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}