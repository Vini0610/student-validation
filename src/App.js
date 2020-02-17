import React from 'react';
import './App.css';

import LoginPage from './LoginPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import DashBoardWrapper from './DashBoardWrapper';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/"> <LoginPage /> </Route>
          <Route exact path="/dashboard"> <DashBoardWrapper /> </Route>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
