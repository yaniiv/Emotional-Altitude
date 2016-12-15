import React from 'react';
import ReactDOM from 'react-dom';

import MyNav from './my-nav.jsx';

import d3 from 'd3';
import $ from 'jquery';
import Victory from './emotion-chart.jsx';
import CommentForm from './comment-form.jsx';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import {connect} from 'react-redux';
import store from '../../store.js';
import * as types from '../../actions/action-types.js';
import {
  Colors,
  Menu,
  MenuItem,
  Intent,
  Breadcrumb,
  Spinner,
  DatePickerFactory,
  Toaster,
  Position
} from "@blueprintjs/core";
import { OurToaster } from "./toaster.jsx";

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.handleCommentSubmit = this.handleCommentSubmit
  }

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

  browserPush() {
    OurToaster.show({ message: "Toasted!" })
  }

  // postDataToDB(feeling) {   $.ajax({     type: "POST",     url:
  // "http://localhost:7777/postUserData",     data: userInfo,     success:
  // function () {       console.log('success')     }   }) }

  render() {
    return (
      <div>
        <button onClick={this.browserPush}>toast</button>
        <CommentForm className="commentBox" onCommentSubmit={this.handleCommentSubmit}/>
        <Victory className="chart" emotionData={this.props.data}/>
      </div>
    )
  }
}

const mapStateToProps = function (store) {
  return {data: store.homeState.data}
}

export default connect(mapStateToProps)(HomeContainer)


