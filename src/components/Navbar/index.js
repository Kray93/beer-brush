import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuListComposition from "./NavMenu";
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { colors, Container } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import logo from "../../images/artisanLogo.svg";
import zIndex from '@material-ui/core/styles/zIndex';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "sticky",
        top: 0,
        zIndex:"2500"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    logo: {
        height: 100,
        flexGrow: 1,
        

    },
}));

export default function Navbar() {
    const classes = useStyles();
    const history = useHistory();
    const handleLogout = (e) => {
        localStorage.removeItem("activeUser");
        e.preventDefault();
        history.push("/");
    }
    // TODO: check creds/token to display NAVMENU on about page
    return (
        <div className={classes.root}>
            <AppBar style={{ background: grey[50] }} position="static">
                <Toolbar>
                    <MenuListComposition/>
                    <img className= {classes.logo} src={logo} align= "center"/>
                    <Button style={{ color: grey[900] }}onClick={handleLogout} color="inherit" >Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}