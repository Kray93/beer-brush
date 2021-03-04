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
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Navbar from './components/Navbar';
import BottomAppBar from "./components/Footer";


function App() {
  const [activeUser, setActiveUser] = useState(null);

  const [userInfo, setUserInfo] = useState();
  
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


  const history = useHistory();
  const loginSuccess = (e)=>{
    console.log("success yo");
    console.log(e);
    history.push(`/home`);
  }

  return (
    <Router>
    <div className="App">
      <Navbar activeUser={activeUser} />
      <div>
      <Route exact path="/" component={Splash} />
      <Route exact path="/about" component={Splash} />
      <Route exact path="/login" component={Login} onReturn={(e)=>loginSuccess(e)} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/gallery" component={Gallery} />
      <Route ecact path="/classes" component={Classes} />
      <Route exact path="/student" component={StudentProfile}/>
      <Route exact path="/instructor">
        <Instructor activeUser={activeUser} />
      </Route>
      </div>
      <BottomAppBar/>
    </div>
    </Router>
  );
}

export default App;