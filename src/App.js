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

function App() {
  const [activeUser, setActiveUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userInfo, setUserInfo] = useState();
  
  const confirmation = () => {
    let token = JSON.parse(localStorage.getItem("activeUser"));
    if (token) token = token.data.token;
    console.log(token);
    axios.get("http://localhost:3001/api/user/secretclub", {
      headers: {
        "authorization": `Bearer ${token}`
      }
    }).then((res)=> {
      console.log(res);
      setActiveUser(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  useEffect(confirmation, []);

  useEffect(()=>{
    showNav();
  },[isLoggedIn]);

  const loginSuccess = ()=>{
    console.log("success yo");
    setIsLoggedIn(true);
  }

  const showNav = ()=>{
    return <Navbar activeUser={activeUser} />
  }

  return (
    <Router>
    <div className="App">
      {showNav()}
      <Route exact path="/" component={Splash} >
        <Splash />
      </Route>
      <Route exact path="/about" component={Splash}>
        <Splash />
      </Route>
      <Route exact path="/login" >
        <Login onReturn={(e)=>loginSuccess(e)} />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/gallery">
        <Gallery />
      </Route>
      <Route ecact path="/classes">
        <Classes />
      </Route>
      <Route exact path="/student">
        <StudentProfile />
      </Route>
      <Route exact path="/instructor">
        <Instructor activeUser={activeUser} />
      </Route>
    </div>
    </Router>
  );
}

export default App;