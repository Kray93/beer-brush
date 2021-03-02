import React from 'react'
import PreLogNav from "../../components/PreLogNav";
import SplashCard from "../../components/SCards";
import Grid from "@material-ui/core/Grid";
import "./style.css";


function Splash() {
    return (
        <div>
            <PreLogNav />
                <Grid container justify= "center">
                    <h1>Welcome to Airbrush Artistry</h1>
                    <p className= "about">
                    We are commited to teaching those who want to learn to airbrush. We offer at-your-liezure classes so you dont have to stress about missing a class.
                    </p>
                </Grid>
                <Grid container justify= "center">
                    <h2>Meet the TEAM!</h2>
                </Grid>
                <Grid container justify= "center"> 
                <SplashCard/>
                </Grid>
        </div>
    )
};

export default Splash
