import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuListComposition from "./NavMenu";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "sticky",
        top: 0
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
    const handleLogout = (e) => {
        e.preventDefault();
        history.push("/");
    }
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <MenuListComposition/>
                    <Typography variant="h6" align="center" className={classes.title}>
                        Spuds
                    </Typography>
                    <Button onClick={handleLogout} color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}