import React from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';
import $ from 'jquery';
// import Victory from 'victory';
import Victory from './chart.jsx';
import CommentForm from './comment_form.jsx';

// var chartDataArray = [];

var TopComponent = React.createClass({

  // loadCommentsFromServer: function() {
  //   $.ajax({
  //     url: '/',
  //     dataType: 'json',
  //     cache: false,
  //     success: function(data) {
  //       this.setState({comment: data});
  //     }.bind(this),
  //     // error: function(xhr, status, err) {
  //     //   console.error(this.props.url, status, err.toString());
  //     // }.bind(this)
  //   });
  // },

  handleCommentSubmit: function(comment) {

    //comment form data as an OBJECT comes into here as a comment variable

    var formattedComment = {}
    formattedComment.y = parseInt(comment.emotionLevel);
    formattedComment.x = new Date (comment.postDate);
    formattedComment.label = comment.text;

    // formattedComment.messageContent = comment.text;

    console.log("formatted comment is:", formattedComment);
    this.setState({data: this.state.data.concat(formattedComment)});

    $.ajax({
      url: 'http://localhost:8080/webpack-dev-server/',
      dataType: 'json',
      type: 'POST',
      data: comment,
      // success: function(data) {
      //   this.setState({data: data});
      // }.bind(this),
      // error: function(xhr, status, err) {
      //   this.setState({data: comments});
      //   console.error(this.props.url, status, err.toString());
      // }.bind(this)
    });
  },

  getInitialState: function() {
    return {data: []};
  },

  // componentDidMount: function() {
  //   this.loadCommentsFromServer();
  //   setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  // },

  render: function() {
    return (
      <div className="commentBox">
        <h1> Emotion Log </h1>
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        <Victory className = "chart" dater = {this.state.data}/>
      </div>
    );
  }
});



ReactDOM.render(<TopComponent />, document.getElementById('commentBox'));

