import React from 'react';
// import ReactDOM from 'react-dom';
// import Nav from './nav'
import { browserHistory } from 'react-router';
import $ from 'jquery';

export default class Login extends React.Component {

  onSubmit(evt) {
    evt.preventDefault();
    const userName = evt.target.elements[0].value;
    const password = evt.target.elements[1].value;
    console.log('in submit');
    console.log('signed up: ', userName);
    console.log('password ', password);

    const userInfo = {
      username: userName,
      password: password
    };

    //dont need string data
    // let stringData = JSON.stringify(value);
      $.ajax({
      type: "POST",
      url: "http://localhost:7777/signup",
      data: userInfo,
      success: function(){
        console.log('kkkkkkk')
      }
    })
  }
    
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" placeholder="username"/> {' '}
          <input type="password" placeholder="password"/>{' '}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    )
  }
}

