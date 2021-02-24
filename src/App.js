import React from 'react'
import { HashRouter as Router, Route } from "react-router-dom"
import './App.css';
import Login from './pages/Login';
import Register from "./pages/Register"

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Register" component={Register} />
    </div>
    </Router>
  );
}

export default App;