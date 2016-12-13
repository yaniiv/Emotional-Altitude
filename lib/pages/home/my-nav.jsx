import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'; 
import store from '../../store.js';

const MyNav = (props) => {
  console.log(props.loggedIn)  
  return (
    <div>
      <nav className="pt-navbar .modifier">
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading">Emotional Altitude</div>
        </div>
        <div className="pt-navbar-group pt-align-right">
          <button className="pt-button pt-minimal pt-icon-home"><Link to="/home">Home</Link></button>
          <button className="pt-button pt-minimal pt-icon-document"><Link to="/login">Login</Link></button>
          <span className="pt-navbar-divider"></span>
          <button className="pt-button pt-minimal pt-icon-user"></button>
          <button className="pt-button pt-minimal pt-icon-notifications"></button>
          <button className="pt-button pt-minimal pt-icon-cog"></button>
        </div>
      </nav>
    </div>  
  );
};

const mapStateToProps = function(store){
  return {
    loggedIn: store.headerState.loggedIn,
  }
}

export default connect(mapStateToProps)(MyNav);