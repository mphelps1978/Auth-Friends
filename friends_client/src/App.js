import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import Friends from './components/Friends'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
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
