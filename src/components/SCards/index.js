import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import "./style.css";


const useStyles = makeStyles((theme) => ({
  root: {
    width:'70%'
  },
  media: {
    height: "100%",
    width: "100%",
    // paddingTop: '56.25%', // 16:9
  },
  cardGrid: {
    "& > *": {
      marginLeft: 7.5,
      marginRight: 7.5,
        // Mobile View
        // [theme.breakpoints.down('sm')]: {
        //   marginLeft: 10,
        //   marginRight: 10,
        // },


    },
},
cards: {
    "& > *": {
        height:75,
        padding: 15,
        // smaller screens/tablets
        // [theme.breakpoints.down('sm')]: {
        //     width:135,
        //     padding:20,
        // },
        // // Mobile View
        // [theme.breakpoints.down('xs')]: {
        //     padding:40,
        // },

    },
}
}));

export default function SplashCard() {
  const classes = useStyles();

  return (
    
      <Grid container justify="center" className={classes.root} >
      <Grid className={classes.cardGrid} container item justify="center" sm={3}>
        <Card className={classes.cards} >
          
          <CardMedia
            className={classes.media}
            image= "https://cdn.abcotvs.com/dip/images/6129476_042420-wabc-coronavirus-farm-to-food-banks-img.jpg?w=800&r=16%3A9"
            title= "potato"
      />
          <CardContent>
            {/* <Typography className={classes.cardText} color="textSecondary" component="p"> */}
            <p className= "cardText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula nibh, blandit ut gravida vitae, tempor ac est. Aliquam ut pulvinar magna. Curabitur ipsum dui, accumsan ut risus sodales, tempus luctus ipsum. Aenean tempor tincidunt porta. Sed ipsum turpis, sagittis a scelerisque nec, rutrum nec quam.
              </p>
        {/* </Typography> */}
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.cardGrid} container item justify="center" sm={3}>
        <Card className={classes.cards}>
          
          <CardMedia
            className={classes.media}
            image= "https://cdn.abcotvs.com/dip/images/6129476_042420-wabc-coronavirus-farm-to-food-banks-img.jpg?w=800&r=16%3A9"
            title= "potato"
      />
          <CardContent>
            {/* <Typography className={classes.cardText} color="textSecondary" component="p"> */}
              <p className= "cardText" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula nibh, blandit ut gravida vitae, tempor ac est. Aliquam ut pulvinar magna. Curabitur ipsum dui, accumsan ut risus sodales, tempus luctus ipsum. Aenean tempor tincidunt porta. Sed ipsum turpis, sagittis a scelerisque nec, rutrum nec quam.
              </p>
        {/* </Typography> */}
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.cardGrid} container item justify="center" sm={3}>
        <Card className={classes.cards}>
          
          <CardMedia
            className={classes.media}
            image= "https://cdn.abcotvs.com/dip/images/6129476_042420-wabc-coronavirus-farm-to-food-banks-img.jpg?w=800&r=16%3A9"
            title= "potato"
      />
          <CardContent>
            {/* <Typography className={classes.cardText} color="textSecondary" component="p"> */}
            <p className= "cardText" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula nibh, blandit ut gravida vitae, tempor ac est. Aliquam ut pulvinar magna. Curabitur ipsum dui, accumsan ut risus sodales, tempus luctus ipsum. Aenean tempor tincidunt porta. Sed ipsum turpis, sagittis a scelerisque nec, rutrum nec quam.
              </p>
        {/* </Typography> */}
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.cardGrid} container item justify="center" sm={3}>
        <Card className={classes.cards}>
          
          <CardMedia
            className={classes.media}
            image= "https://cdn.abcotvs.com/dip/images/6129476_042420-wabc-coronavirus-farm-to-food-banks-img.jpg?w=800&r=16%3A9"
            title="potato"
      />
          <CardContent>
            {/* <Typography className={classes.cardText} color="textSecondary" component="p"> */}
            <p className= "cardText" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula nibh, blandit ut gravida vitae, tempor ac est. Aliquam ut pulvinar magna. Curabitur ipsum dui, accumsan ut risus sodales, tempus luctus ipsum. Aenean tempor tincidunt porta. Sed ipsum turpis, sagittis a scelerisque nec, rutrum nec quam.
              </p>
        {/* </Typography> */}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    
  );
}
