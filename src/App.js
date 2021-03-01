import React from 'react'
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

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route ecact path="/classes" component={Classes} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/splash" component={About} />
      <Route exact path="/student-profile" component={StudentProfile}/>
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/about" component={Splash} />
      <Route exact path="/" component={Splash} />
      <Route exact path="/instructor" component={Instructor} />
    </div>
    </Router>
  );
}

export default App;