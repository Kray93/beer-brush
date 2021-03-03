import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import "./style.css";

const useStyles = makeStyles(() => ({
  root: {
    width: '70%'
  },
  media: {
    height: "100%",
    width: "100%",
  },
  cardGrid: {
    "& > *": {
      marginLeft: 7.5,
      marginRight: 7.5,
    },
  },
  cards: {
    "& > *": {
      height: 75,
      padding: 15,
    },
  }
}));

export default function ProfileGrid(props) {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root} >
      <Grid className={classes.cardGrid} container item justify="center" sm={3}>
        <Card className={classes.cards}>
          <CardMedia
            className={classes.media}
            img={props.img}
            title={props.title}
          />
          <CardContent>
            <p className="cardText" >
              {props.description}
              </p>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}