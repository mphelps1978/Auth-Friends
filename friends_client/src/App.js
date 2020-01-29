import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './App.css'


import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import Friends from './components/Friends'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="app">
      <Header/>
        <Switch>
          <PrivateRoute exact path='/members' component={Friends} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
