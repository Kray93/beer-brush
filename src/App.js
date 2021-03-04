import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Route } from "react-router-dom"
import './App.css';
import Login from './pages/Login';
import Gallery from './pages/Gallery';
import Register from "./pages/Register";
import Classes from "./pages/Classes";
import Home from "./pages/Home";
import StudentProfile from "./pages/StudentProfile";
import Splash from './pages/Splash';
import Instructor from './pages/instructorProfile'
import axios from 'axios';
import Navbar from './components/Navbar';
import BottomAppBar from "./components/Footer";


function App() {
  const [activeUser, setActiveUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userInfo, setUserInfo] = useState();

  const confirmation = () => {
    let token = JSON.parse(localStorage.getItem("activeUser"));
    if (token) token = token.data.token;
    // console.log(token);
    axios.get("http://localhost:3001/api/user/secretclub", {
      headers: {
        "authorization": `Bearer ${token}`
      }
    }).then((res) => {
      // console.log(res);
      setActiveUser(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(confirmation, []);

  useEffect(() => {
    showNav();
  }, [isLoggedIn]);

  const loginSuccess = () => {
    console.log("success yo!");
    setIsLoggedIn(true);
  }

  const showNav = () => {
    return <Navbar activeUser={activeUser} />
  }

  return (
    <Router>

      {activeUser !== undefined ?
        <div className="App">
          {showNav()}
          <div>
          <Route exact path="/" component={Splash} >
            <Splash activeUser={activeUser} />
          </Route>
          <Route exact path="/about" component={Splash}>
            <Splash activeUser={activeUser} />
          </Route>
          <Route exact path="/login" >
            <Login onReturn={(e) => loginSuccess(e)} activeUser={activeUser} />
          </Route>
          <Route exact path="/register">
            <Register activeUser={activeUser} />
          </Route>
          <Route exact path="/home">
            <Home activeUser={activeUser} />
          </Route>
          <Route exact path="/gallery">
            <Gallery activeUser={activeUser} />
          </Route>
          <Route exact path="/classes">
            <Classes activeUser={activeUser} />
          </Route>
          <Route exact path="/student">
            <StudentProfile activeUser={activeUser} />
          </Route>
          <Route exact path="/project">
            <StudentProfile activeUser={activeUser} />
          </Route>
          <Route exact path="/instructor">
            <Instructor activeUser={activeUser} />
          </Route>
          </div>
          <BottomAppBar/>
        </div>
        :
        <p>Loading...</p>
      }

    </Router>
  );
}

export default App;