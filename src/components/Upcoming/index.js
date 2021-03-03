import React, {useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './style.css'
import axios from 'axios';

function Upcoming(props) {
  const {name, date, level, location, recurring, time, UserId, duration} = props.data
  const [userName, setUserName] = useState()

  useEffect(() => {
    // get the user who posted this.
    axios.get(`http://localhost:3001/api/user/${UserId}`)
    .then(resp => {
      setUserName(resp.data.data.uname)
    })
  },[])

  const reserveSpot = (e) => {
    console.log(e.target);
    // get currentLogged in user
    
  }

  return (
    <div>
      <Grid container justify="center">
        <h3>Upcoming Events</h3>
      </Grid>
      <Card>
        <CardContent className="content">
          <div className="title">
            <h3>{name}</h3>
            <p>date: {date}</p>
          </div>
          <p>Class taught by: {userName}</p>
          <p>Level of difficulty: {level}</p>
          <p>Location: {location}</p>
          <p>Time: {time}</p>
          <p>recurring: {recurring}</p>
        </CardContent>
        <CardActions>
          <Button
            variant='contained'
            color='primary'
            size="small"
            onClick={reserveSpot}
          >
            Reserve your spot!
        </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Upcoming;