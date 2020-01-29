import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import Login from './Login'

import '../App.css'




const Header = (props) => {

  const logout = () =>{
    localStorage.removeItem('token')
    window.location.reload()
  }

  return(
    <div className="site-header">
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><a onClick={logout}>Logout</a></li>
      </ul>

    </div>
  )
}

export default Header