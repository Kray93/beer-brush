
// IF USER IS NOT LOGGED IN. USE THIS SPLASHPAGE NAVBAR
// ====================================================
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,

    },
}));


export default function Navbar() {
    const classes = useStyles();
    const history = useHistory();
    const handleLogin = (e) => {
        e.preventDefault();
        history.push("/login");
    }
    const handleRegister = (e) => {
        e.preventDefault();
        history.push("/register")
    }
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" align="center" className={classes.title}>
                        Airbrush Artistry
                    </Typography>
                    <Button onClick={handleLogin} color="inherit">Login</Button>
                    <p>|</p>
                    <Button onClick={handleRegister}  color="inherit">Register</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}