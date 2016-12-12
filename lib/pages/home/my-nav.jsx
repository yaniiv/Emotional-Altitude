import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

const MyNav = (props) => {
  return (
    <div>
      
    <div>
      <nav className="pt-navbar .modifier">
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading">Blueprint</div>
          <input className="pt-input" placeholder="Search files..." type="text"/>
        </div>
        <div className="pt-navbar-group pt-align-right">
          <button className="pt-button pt-minimal pt-icon-home">Home</button>
          <button className="pt-button pt-minimal pt-icon-document">Files</button>
          <span className="pt-navbar-divider"></span>
          <button className="pt-button pt-minimal pt-icon-user"></button>
          <button className="pt-button pt-minimal pt-icon-notifications"></button>
          <button className="pt-button pt-minimal pt-icon-cog"></button>
        </div>
      </nav>
      </div>
      
    <div>
      <nav className="nav">
        <ul>
          <li><Link to="login">Login</Link></li>
          <li><Link to="home">Home</Link></li>
          <li><Link to="signup">Signup</Link></li>
        </ul>
      </nav>
      </div>
      
    </div>  
  );
};

export default MyNav