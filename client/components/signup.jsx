import React from 'react';
import { browserHistory, Link } from 'react-router';
import $ from 'jquery';


export default class Signup extends React.Component {

  onSignup(evt) {
    evt.preventDefault();

    const userInfo = {
      username: evt.target.elements[0].value,
      password: evt.target.elements[1].value,
      emotionData: []
    };
    console.log('signing up: ', userInfo)

    $.ajax({
      type: "POST",
      url: "http://localhost:7777/signup",
      data: userInfo,
      success: (userSaved) => {
        console.log('in SUCCESS signed up: ', userSaved)
      }
    });
    browserHistory.push('/home');
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.onSignup.bind(this)}>
          <input type="text" placeholder="username"/> {' '}
          <input type="password" placeholder="password"/>{' '}
          <button type="submit" className="submit-button">Register</button>
        </form>
      </div>
    )
  }
}

