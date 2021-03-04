import React from 'react'
import Grid from "@material-ui/core/Grid";
import "./style.css";

function Splash() {
    return (
        <div>
                <Grid container justify= "center">
                    <h1>Welcome to Artisan's Lounge</h1>
                    <p className= "about">
                    We are commited to teaching those who want to learn to any art! We offer at-your-leisure classes so you dont have to stress about missing a class. Register as an instructor to add coarses or register as an aspiring artist and join any class related to your passion!
                    </p>
                </Grid>
                <Grid>
                    <p>Register and Login to learn more!</p>
                </Grid>
        </div>
    )
};

export default Splash