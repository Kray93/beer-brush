import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuListComposition from "../NavMenu";
import { Link } from 'react-router-dom';



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

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <MenuListComposition/>
                    <Typography variant="h6" align="center" className={classes.title}>
                        Spuds
                    </Typography>
                    <Link href="http://localhost:3000/#/splash" onClick={e=>{e.preventDefault()}} color="inherit">Logout</Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}