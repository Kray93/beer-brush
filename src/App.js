import React from 'react'
import { HashRouter as Router, Route } from "react-router-dom"
import './App.css';
import Login from './pages/Login';
import Register from "./pages/Register"
import Events from "./pages/Events"
import Home from "./pages/Home/index"

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route ecact path="/events" component={Events} />
      <Route exact path="/home" component={Home} />
    </div>
    </Router>
  );
}

export default App;