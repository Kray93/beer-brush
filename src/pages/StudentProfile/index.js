import React from "react";

import Navbar from "../../components/Navbar";
import SplashCard from "../../components/ProfileGrid";
import Grid from "@material-ui/core/Grid";
import "./style.css";

function StudentProfile() {
  return (
    <div>
      <Navbar />
      <Grid container justify='center'>
        <div className='bio'>
          <Grid container item justify='center'>
            <Grid className = "identify" container item xs={3} justify='center'>
              HEY YALL
            </Grid>
            <Grid container item xs={9} justify='center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula
              nibh, blandit ut gravida vitae, tempor ac est. Aliquam ut pulvinar
              magna. Curabitur ipsum dui, accumsan ut risus sodales, tempus
              luctus ipsum. Aenean tempor tincidunt porta.
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid container justify='center'>
        <SplashCard />
      </Grid>
    </div>
  );
}

export default StudentProfile;
