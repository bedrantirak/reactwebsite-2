import React from 'react';
import Navbar from "./components/Navbar"
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
