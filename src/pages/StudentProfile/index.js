import React from "react";
import Navbar from "../../components/Navbar";
import SplashCard from "../../components/ProfileGrid";
import Grid from "@material-ui/core/Grid";
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, Date, Time, Instructor) {
  return { name, Date, Time, Instructor };
}

const selectedClasses = [];

function StudentProfile() {
  const style = useStyles();



  const artistName = () => {
    let activeUser = JSON.parse(localStorage.getItem("activeUser"));
    let fname = activeUser.data.user.fname;
      if (activeUser.data.user.isArtist===true){
        return fname;
      }
  }

  return (
    <div>
      <Navbar />
      <Grid container justify='center'>
        <div className='name'>
            <h1>Hello, {artistName()}</h1>  
        </div>
      </Grid>

      <Grid container justify='center'>
        <h2>Class Schedule</h2>
        <TableContainer component={Paper}>
      <Table className={style.table} aria-label="simple table">
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
      

      <Grid container justify='center'>
        <SplashCard />
      </Grid>
    </div>
  );
}

export default StudentProfile;