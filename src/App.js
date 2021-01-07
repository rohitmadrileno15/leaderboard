import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link , Switch } from "react-router-dom";
import  Home  from './Home';
import   LeaderBoard  from './LeaderBoard';
import Nav  from './Nav';
import Marks from './Marks';

function App() {
  return (

    <Router>
      <div className="App">

        <Nav />

        
        <Switch>
        <Route path="/marks" component={ Marks } />
        <Route path="/home" component={ Home } />
        
        <Route path="/leaderboard" component={  LeaderBoard } />

        </Switch>


      </div>
    </Router>
    
  );
}

export default App;

 