import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

function Upcoming() {

  return (
      <>
        <h3>Upcoming Events</h3>
    <Card>
      <CardContent>
        <ul>
            <li>3/4/21: beer-brush</li>
            <li>3/5/21: skull night</li>
            <li>3/6/21: flames</li>
        </ul>
      </CardContent>
      <CardActions>
        <Button size="small">Reserve your spot!</Button>
      </CardActions>
    </Card>
    </>
  );
}

export default Upcoming;