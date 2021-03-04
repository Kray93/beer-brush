import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import ProfileGrid from "../../components/ProfileGrid";
import Grid from "@material-ui/core/Grid";
import "./style.css";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import axios from "axios";

function createData(name, Date, Time, Instructor) {
  return { name, Date, Time, Instructor };
}

const selectedClasses = [];

function StudentProfile() {
  const [userData, setUserData] = useState()
  const [view, setView] = useState("overview")

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("activeUser"));
    token = token.data.token;

    axios.get(`http://localhost:3001/api/user/`, {
      headers: {
        "authorization": `Bearer ${token}`
      }
    })
      .then(resp => {
        setUserData(resp.data.data)
      }).catch(err => console.log(err))
  }, [])

  const changeView = (e) => {
    let newView = e.target.parentElement.value
    setView(newView)
  }

  const content = () => {
    if (view === 'overview') {
      return <div>
        <Grid container justify='center'>
          <h2 className='schedule' >Class Schedule</h2>
          <TableContainer component={Paper} className='tableCont'>
            <Table className='table' aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Class:</TableCell>
                  <TableCell align="right">Date:</TableCell>
                  <TableCell align="right">Time:</TableCell>
                  <TableCell align="right">Instructor:</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedClasses.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.Date}</TableCell>
                    <TableCell align="right">{row.Time}</TableCell>
                    <TableCell align="right">{row.Instructor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </div>
    } else if (view === "addProject") {
      return <div>
        <form className="addProjectForm">
          <input type="text" name="title" placeholder="title"/>
          <input type="text" name="dateStarted" placeholder="date started"/>
          <input type="text" name="dateFinished" placeholder="date finished"/>
          <input type="text" name="description" placeholder="description"/>
          <input type="text" name="materialUsed" placeholder="material used"/>
          <input type="text" name="category" placeholder="category"/>
          <div>
            <label htmlFor="forSale">For Sale:</label>
            <input type="checkbox" name="forSale" />
          </div>
          <div>
            <label htmlFor="isPublic">Make it public:</label>
            <input type="checkbox" name="forSale" />
          </div>
          <input type="file" name="photo" />
          <button>Add Project!</button>
        </form>
      </div>
    }
  }

  return (
    <div>
      {userData !== undefined ?
        <div>


          <Grid container justify='center'>
            <div className='name'>
              <h1>Hello, {userData.fname}</h1>
            </div>
          </Grid>
          <Button className="addBtn" variant="contained" value="addProject" onClick={changeView}>Add Project</Button>
          <Button className="addBtn" variant="contained" value="overview" onClick={changeView}>Overview</Button>
          {content()}
        </div>
        :
        <p>Loading...</p>
      }
    </div>
  );
}

export default StudentProfile;