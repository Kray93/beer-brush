import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop:'50px',
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function SplashColumn() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <img
              id="image"
              src="https://i.postimg.cc/sfqz56Dw/claire.jpg"
              className="picofus"
              alt="Me"
            />
            <p>Claire Cheek</p>
            <p>Full-Stack & Project Manager</p>
            <p>
              <a href="https://github.com/cccheek">Github</a>
            </p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <img
              id="image"
              src="https://i.postimg.cc/j51pQ2KL/erik.jpg"
              className="picofus"
              alt="IMG-20171228-021801-278"
            />
            <p>Erik Seward</p>
            <p>Frontend</p>
            <p>
              <a href="https://github.com/ErikSeward">Github</a>
            </p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            {" "}
            <img
              id="image"
              src="https://i.postimg.cc/mktbBKZF/jess.jpg"
              className="picofus"
              alt="IMG-20171228-021801-278"
            />
            <p>
              Jessica Dao
              <p>
              <p>Full-Stack & Git Master</p>
                <a href="https://github.com/JessicaDao">Github</a>
              </p>
            </p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <img
              id="image"
              src="https://i.postimg.cc/NjPZwL9b/kev.jpg"
              className="picofus"
              alt="IMG-20171228-021801-278"
            />
            <p>
              Kevin Willig
              <p>
              <p>Frontend</p>
                <a href="https://github.com/Kray93">Github</a>
              </p>
            </p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <img
              id="image"
              src="https://i.postimg.cc/wMHGkmZx/tyler.png"
              className="picofus"
              alt="IMG-20171228-021801-278"
            />
            <p>
              Tyler Thibault
              <p>
              <p>Full-Stack</p>
                <a href="https://github.com/Tbone8098">Github</a>
              </p>
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
