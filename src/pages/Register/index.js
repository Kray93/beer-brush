import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import clsx from 'clsx';
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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import './style.css'
import PreLogNav from '../../components/PreLogNav';

function Register() {
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
    const [first, setFirst] = useState();
    const [last, setLast] = useState();
    const [email, setEmail] = useState();
    const [userName, setUserName] = useState();
    const [userType, setUserType] = useState();
    const [password, setPassword] = useState({
        password: '',
        showPassword: false,
    });
    const handleSubmit = e => {
        e.preventDefault();
        console.log(first, last, email, password, userName, userType);
        const userData = {
            fname:first,
            lname:last,
            email:email,
            pw:password.password,
            uname:userName,
            isArtist:userType
        }
        Axios.post(`http://localhost:3001/api/user/register`,userData)
        .then((res) => {
            console.log(res);
              history.push(`/login`)
            
        }).catch(err=>{
            console.log(err);
        });
    };
    const handleChange = (prop) => (event) => {
        setPassword({ ...password, [prop]: event.target.value });
    };
    const handleUserChange = (event) => {
        if (event.target.value==="Artist") {
            setUserType(true);
        } else {
            setUserType(false);
        }
    };

    const handleClickShowPassword = () => {
        setPassword({ ...password, showPassword: !password.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
        <PreLogNav />
            <CssBaseline />
            <form onSubmit={handleSubmit}>
                <Container className="container" maxWidth="xs">
                    <h5>Registration</h5>
                    <Grid container direction="column"
                        justify="center"
                        alignItems="center" spacing={1}>
                        <Grid item xs={6}>
                            <FormControl>
                                <InputLabel htmlFor="my-input">First Name</InputLabel>
                                <Input onChange={e => setFirst(e.target.value)} id="my-input" aria-describedby="my-helper-text" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Last Name</InputLabel>
                                <Input onChange={e => setLast(e.target.value)} id="my-input" aria-describedby="my-helper-text" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Email address</InputLabel>
                                <Input onChange={e => setEmail(e.target.value)} id="my-input" aria-describedby="my-helper-text" />
                            </FormControl>
                        </Grid>
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
                        <Grid item xs={6}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">User Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={userType}
                                    onChange={handleUserChange}
                                >
                                    <MenuItem value="Instructor">Instructor</MenuItem>
                                    <MenuItem value="Artist">Artist</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Button href="http://localhost:3000/#/login" variant="contained" spacing={1}>Back to Login</Button>
                        <Button type="submit" variant="contained">Register</Button>
                    </Grid>
                </Container>
            </form>
        </>
    )
}

export default Register;