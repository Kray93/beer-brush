import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuListComposition from "./NavMenu";
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import logo from "../../images/artisanLogo.svg";
import "./style.css"


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

export default function Navbar(props) {
    const classes = useStyles();
    const history = useHistory();
    const handleLogout = (e) => {
        localStorage.removeItem("activeUser");
        e.preventDefault();
        history.push("/");
    }
    const handleLogin = (e) => {
        e.preventDefault();
        history.push("/login");
    }
    const handleRegister = (e) => {
        e.preventDefault();
        history.push("/register")
    }
    // TODO: check creds/token to display NAVMENU on about page
    const loginCreds = () => {
        let activeUser = props.activeUser;
        console.log(activeUser);
        if (activeUser) {
            return (
                <div className={classes.root}>
                    <AppBar style={{ background: grey[50] }} position="static">
                        <Toolbar>
                            <MenuListComposition activeUser={activeUser} />
                            <img className={classes.logo} src={logo} align="center" alt="logo" />
                            <Button style={{ color: grey[50] }} onClick={handleLogout} color="inherit" >Logout</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            )
        } else {
            return (
                <div className={classes.root}>
                    <AppBar style={{ background: grey[50] }} position="static">
                        <Toolbar>
                            <MenuListComposition/>
                        <img className={classes.logo} src={logo} align="center" alt="logo" />
                           <div className= "wtf">
                           <Button style={{ color: grey[900] }} className="color" onClick={handleLogin} color="inherit">
                                <div className="color">Login</div>
                                </Button>
                            <div className="color">|</div>
                            <Button style={{ color: grey[900] }}  onClick={handleRegister} color="inherit">
                                <div className="color">Register</div></Button>
                           </div>
                        </Toolbar>
                    </AppBar>
                </div>
            )
        }
    }
    return loginCreds();
}