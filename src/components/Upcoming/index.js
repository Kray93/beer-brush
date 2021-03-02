import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './style.css'

function Upcoming() {

  return (
      <>
      <Grid container justify= "center">
        <h3>Upcoming Events</h3>
      </Grid>
    <Card>
      <CardContent>
        <ul>
            <li>3/4/21: beer-brush</li>
            <li>3/5/21: skull night</li>
            <li>3/6/21: flames</li>
        </ul>
      </CardContent>
      <CardActions>
        <Button 
          variant='contained' 
          color='primary' 
          size="small"
          >
            Reserve your spot!
        </Button>
      </CardActions>
    </Card>
    </>
  );
}

export default Upcoming;