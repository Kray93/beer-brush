import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './style.css'
import axios from 'axios';

function Upcoming(props) {
  const {classId, name, date, level, location, recurring, time, userId, duration } = props.data
  const [creatorData, setCreatorData] = useState()

  useEffect(() => {
    // get the user who posted this.
    axios.get(`http://localhost:3001/api/user/get/${userId}`)
      .then(resp => {
        console.log(resp);
        if (resp) {
          setCreatorData(resp.data.data)
        }
      })
  }, [])

  const reserveSpot = (e) => {
    console.log(e.target.value);
    // get currentLogged in user
    axios.post('')

  }

  return (
    <div>
      {creatorData !== undefined ?
        <Card className="card">
          <CardContent className="content">
            <div className="title">
              <h3> {name} </h3>
              <p>date: {date.getMonth()}/{date.getDate()}/{date.getFullYear()}</p>
            </div>
            <p>Class taught by: {creatorData.fname} {creatorData.lname} </p>
            <p>Level of difficulty: {level}</p>
            <p>Location: {location}</p>
            <p>Time: {time}</p>
            <p>recurring: {recurring}</p>
          </CardContent>
          <CardActions>
            <button className="btn" value={classId} onClick={reserveSpot}>Reserve Your Spot!</button>
          </CardActions>
        </Card>
        :
        <p>No Classes Registered</p>
      }

    </div>
  );
}

export default Upcoming;