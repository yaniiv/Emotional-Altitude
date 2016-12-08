import React from 'react';
import ReactDOM from 'react-dom';
// import Navbar from './nav-bar.jsx';
import d3 from 'd3';
import $ from 'jquery';
import Victory from './chart.jsx';
import CommentForm from './comment_form.jsx';
import {Router, Route, Link} from 'react-router';

import {connect} from 'react-redux';
import store from '../../store.js';
import * as types from '../../actions/action-types.js';
import { Colors, Menu, MenuItem, Intent, Navbar, Breadcrumb, Spinner, DatePickerFactory} from "@blueprintjs/core";

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.handleCommentSubmit = this
      .handleCommentSubmit
      .bind(this);
  }

  // OLDhandleCommentSubmit(e) {   e.preventDefault();   console.log('feeling data
  // before adding new feels: \n', this.state.data);   const feeling = {
  // feelingNum: e.target.elements[0].valueAsNumber,     feelingText:
  // e.target.elements[1].value,     feelingDate: new Date()   };
  // console.log("new feeling data point to add", feeling);   const feelingData =
  // this.state.data;   feelingData.push(feeling);   this.setState({ data:
  // feelingData });   console.log('feeling data after adding new feels: \n',
  // this.state.data); }

  handleCommentSubmit(e) {
    e.preventDefault();
    store.dispatch({
      type: types.ADD_DATA,
      feelsObj: {
        feelingNum: e.target.elements[0].valueAsNumber,
        feelingText: e.target.elements[1].value,
        feelingDate: new Date()
      }
    })
  }

  // postDataToDB(feeling) {   $.ajax({     type: "POST",     url:
  // "http://localhost:7777/postUserData",     data: userInfo,     success:
  // function () {       console.log('success')     }   }) }

  render() {
    return (
      <div>
        <nav class="pt-navbar .modifier">
  <div class="pt-navbar-group pt-align-left">
    <div class="pt-navbar-heading">Blueprint</div>
    <input class="pt-input" placeholder="Search files..." type="text" />
  </div>
  <div class="pt-navbar-group pt-align-right">
    <button class="pt-button pt-minimal pt-icon-home">Home</button>
    <button class="pt-button pt-minimal pt-icon-document">Files</button>
    <span class="pt-navbar-divider"></span>
    <button class="pt-button pt-minimal pt-icon-user"></button>
    <button class="pt-button pt-minimal pt-icon-notifications"></button>
    <button class="pt-button pt-minimal pt-icon-cog"></button>
  </div>
</nav>

        <div className="commentBox">

          <button intent={Intent.PRIMARY} className="pt-button">dawda</button>
          <Menu >
          <MenuItem />
          </Menu>
          <Breadcrumb/>
          hihihihicddd
          <Spinner/>
          <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
          <Victory className="chart" emotionData={this.props.data}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (store) {
  return {data: store.homeState.data}
}

export default connect(mapStateToProps)(HomeContainer)