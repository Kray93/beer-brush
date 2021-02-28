import React from 'react'
import Navbar from "../../components/Navbar";
import SplashCard from "../../components/SCards";
import Grid from "@material-ui/core/Grid";
import "./style.css";


function Splash() {
    return (
        <div>
            <Navbar/>
                <Grid container justify= "center">
                    <p className= "about">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula nibh, blandit ut gravida vitae, tempor ac est. Aliquam ut pulvinar magna. Curabitur ipsum dui, accumsan ut risus sodales, tempus luctus ipsum. Aenean tempor tincidunt porta. Sed ipsum turpis, sagittis a scelerisque nec, rutrum nec quam. Morbi elementum neque risus, non euismod tortor tristique id. In non blandit ante, vel rhoncus urna. Duis sodales eros at est tincidunt, eget aliquam purus tincidunt. Phasellus a elit sapien. Sed sit amet elementum urna. Nulla nec justo erat. Aliquam purus sapien, fringilla sit amet eleifend quis, mollis tincidunt nisi. Ut ac elementum purus. Nam suscipit iaculis libero, in pellentesque magna suscipit id
                    </p>
                </Grid>
                <Grid container justify= "center">
                <SplashCard/>
                </Grid>
            
        </div>
    )
};

export default Splash
