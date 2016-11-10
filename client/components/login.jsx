import React from 'react';
import ReactDOM from 'react-dom';
// import Nav from './nav'
import { browserHistory } from 'react-router'
import $ from 'jquery';

class Login extends React.Component {
  


  onSubmit (evt) {
    console.log('in submit')
    evt.preventDefault()
    const userName = evt.target.elements[0].value
    const password = evt.target.elements[1].value

    const value = {
      username: 'yan',
      password: 'pass'
  }


    let stringData = JSON.stringify(value);

    $.ajax({
      type: "POST",
      url: "http://localhost:7777/signup",
      data: stringData,
      success: function (result) {
        console.log('in success')
        console.log(result)
      }
    })
    // .done(() => {
    //   $.ajax({
    //   type: "GET",
    //   url: "http://localhost:3000/showall",
    //   data: stringData,
    //   success: function (result) {
    //     console.log('in success')
    //     console.log(result)
    //   }
    // })
    // })
    
    // $.ajax({
    //     url : "http://localhost:3000/login",
    //     type: "POST",
    //     data : value,
    //     success: function(data, textStatus, jqXHR)
    //     {
    //       //upon successful login make get reqeust to get user data after login
    //       let username = JSON.parse(localStorage.getItem('user')).username;
    //       $.ajax({
    //           url : "http://localhost:3000/api/user/" +username+ "/expense",
    //           type: "GET",
    //           success: function(data)
    //           {
    //             console.log('data from login',data)
    //             let stringifiedData = JSON.stringify(data)
    //             localStorage.setItem("expenses", stringifiedData);
    //           },
    //           error: function (jqXHR, textStatus, errorThrown)
    //           {
    //             console.log('no bueno');
    //           }
    //       }).then( function() {
    //         const path = `/dashboard/`
    //         browserHistory.push(path)
    //       })
    //     },
    //     error: function (jqXHR, textStatus, errorThrown)
    //     {
    //       console.log('no bueno');
    //     }
    // });
  }

  // signin() {
    
  // }

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

module.exports = Login;
