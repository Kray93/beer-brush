import React, { useEffect, useState } from "react";
// import { CloudinaryContext } from "cloudinary-react";
// import { fetchPhotos, openUploadWidget } from "./CloudinaryService";
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

function StudentProfile(props) {
  const [userData, setUserData] = useState()
  const [view, setView] = useState("overview")
  // const [images, setImages] = useState([]);

  // const beginUpload = tag => {
  //   const uploadOptions = {
  //     cloudName: "brush",
  //     tags: [tag],
  //     uploadPreset: "upload"
  //   };

  //   openUploadWidget(uploadOptions, (error, photos) => {
  //     if (!error) {
  //       console.log(photos);
  //       if (photos.event === 'success') {
  //         setImages([...images, photos.info.public_id])
  //       }
  //     } else {
  //       console.log(error);
  //     }
  //   })
  // }

  // useEffect(() => {
  //   fetchPhotos("image", setImages);
  // }, [])

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("activeUser"));
    token = token.data.token;
    // console.log("token" + token)
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

  const addProjectSubmit = (e) => {
    e.preventDefault()
    let data = {
      title: e.target.title.value,
      artistId: 'Tyler',
      dateStarted: e.target.dateStarted.value,
      dateFinished: e.target.dateFinished.value,
      description: e.target.desc.value,
      materialUsed: e.target.materialUsed.value,
      category: e.target.categories.value,
      forSale: e.target.forSale.value,
      isPublic: e.target.isPublic.value,
    }

    console.log(data);

    let token = JSON.parse(localStorage.getItem("activeUser"));
    token = token.data.token;
    axios.post('http://localhost:3001/api/project/newProject', data, {
      headers: {
        "authorization": `Bearer ${token}`
      }
    }).then(resp => {
      console.log(resp);
    }).catch(err => console.log(err))
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
        <div className="addProjectFormBox">

          <form className="addProjectForm" onSubmit={addProjectSubmit}>
            <input type="text" name="title" placeholder="title" />
            <input type="date" name="dateStarted" placeholder="date started" />
            <input type="date" name="dateFinished" placeholder="date finished" />
            <textarea name="desc" cols="30" rows="10"></textarea>
            <select name="materialUsed">
              <option value="wood">Wood</option>
              <option value="metal">Metal</option>
              <option value="canvas">Canvas</option>
              <option value="ceramics">ceramics</option>
            </select>
            <select name="categories">
              <option value="woodWorking">Wood Working</option>
              <option value="metalWorking">Metal Working</option>
              <option value="sewing">Sewing</option>
              <option value="Painting">Painting</option>
            </select>
            <div>
              <label htmlFor="forSale">For Sale:</label>
              <input type="checkbox" name="forSale" />
            </div>
            <div>
              <label htmlFor="isPublic">Make it public:</label>
              <input type="checkbox" name="isPublic" />
            </div>
            {/* <CloudinaryContext cloudName="brush">
            <button onClick={() => beginUpload()}>Upload Image</button>
            <section>
              {images.map(i => <img src={i} alt="" />)}
            </section>
          </CloudinaryContext> */}
            {/* <input type="file" name="photo" /> */}
            <button className="btn">Add Project!</button>
          </form>
        </div>
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