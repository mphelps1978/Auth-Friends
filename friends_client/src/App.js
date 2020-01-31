import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Friends from "./components/Friends"


function App() {

  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <Router>
    <div className="App">
    <nav className='nav'>
      <Link to='/login'>Login  |</Link>
      <Link to='/friends'>Head to the Couch  |</Link>
      <Link to='/login' onClick={handleLogout}>Logout</Link>
    </nav>
    <Switch>
      <PrivateRoute path="/friends" component={Friends} />
      <Route path="/login" component={Login} />
      <Route component={Login} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;