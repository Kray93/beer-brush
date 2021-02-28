import React from 'react'
import { HashRouter as Router, Route } from "react-router-dom"
import './App.css';
import Login from './pages/Login';
import Register from "./pages/Register";
import About from './pages/Splash';
import Classes from "./pages/Classes";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route ecact path="/classes" component={Classes} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/splash" component={About} />
    </div>
    </Router>
  );
}

export default App;