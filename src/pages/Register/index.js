import React from 'react';
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
import './style.css'

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
    const [user, setUser] = React.useState('');
    const [values, setValues] = React.useState({
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleUserChange = (event) => {
        setUser(event.target.value);
      };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <CssBaseline />
            <Container className="container" maxWidth="xs">
                <h5>Registration</h5>
                <Grid container direction="column"
                    justify="center"
                    alignItems="center" spacing={1}>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">First Name</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Last Name</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Email address</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
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
                                value={user}
                                onChange={handleUserChange}
                            >
                                <MenuItem value="Instructor">Instructor</MenuItem>
                                <MenuItem value="Student">Student</MenuItem>
                                <MenuItem value="User">User</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Register;