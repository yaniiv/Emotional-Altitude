import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';


export default class Nav extends React.Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <nav className="nav">
        <ul>
          <li><Link to="login">Login</Link></li>
          <li><Link to="home">Home</Link></li>
          <li><Link to="signup">Signup</Link></li>
        </ul>
      </nav>
    )
  }
}

          // <li><Link to="/login">Login</Link></li>
          // <li><Link to="/signup">Signup</Link></li>
// <li><Link to="/profile">Profile</Link></li>
// <li><Link to="/expense">Expenses</Link></li>

          // <li id ='logout' onClick = {this.logUserOut.bind(this)} ><Link to="/home">Logout</Link></li>
