import React, { useState } from 'react';
import clsx from 'clsx';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import './style.css'
import Navbar from '../../components/Navbar';

function Login(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: '25ch',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));
    const classes = useStyles();
    const history = useHistory();
    const [userName, setUserName] = useState('');
    const [password, setValues] = useState({
        password: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...password, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...password, showPassword: !password.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmit = e => {
        e.preventDefault();
        console.log(userName, password.password);
        let userData = {
            uname: userName, 
            pw: password.password}
        Axios.post(`http://localhost:3001/api/user/login`, userData)
            .then((res) => {
                console.log(res);
                if (res.status===200) {
                    localStorage.setItem("activeUser", JSON.stringify(res.data));
                    history.push("/home")
                //     console.log(props);
                //    return props.onReturn(res.data);
                }
                
            }).catch(err => {
                console.log(err);
            });
    };
    const handleHome = e => {
        e.preventDefault();
        history.push(`/about`)
    };




    return (
        <>
        <CssBaseline />
           <Container  className="container" maxWidth="xs">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <Grid container direction="column"
                        justify="center"
                        alignItems="center" spacing={1}>
                        <Grid item xs={6}>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Username</InputLabel>
                                <Input onChange={e => setUserName(e.target.value)} id="my-input" aria-describedby="my-helper-text" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl className={clsx(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={password.showPassword ? 'text' : 'password'}
                                    value={password.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {password.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid>
                            <Button type="submit" variant="contained">Login</Button>
                            <Button onClick={handleHome} variant="contained">Back</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    )
}

export default Login;