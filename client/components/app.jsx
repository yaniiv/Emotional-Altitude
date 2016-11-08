import React from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';
import $ from 'jquery';
// import Victory from 'victory';
import Victory from './chart.jsx';
import CommentForm from './comment_form.jsx';

class TopComponent extends React.Component {
  constructo(props) {
    super(props);
    this.state = { data: [] };
  }

      // componentDidMount: function() {
  //   this.loadCommentsFromServer();
  //   // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  // },  
  

  // loadCommentsFromServer: function() {
  //   $.get('/', function (result) {
  //     console.log('hi from get on clientSide');
  //   }.bind(this));

  //   // $.ajax({
  //   //   url: '/',
  //   //   dataType: 'json',
  //   //   cache: false,
  //   //   success: function(data) {
  //   //     this.setState({comment: data});
  //   //   }.bind(this),
  //   //   // error: function(xhr, status, err) {
  //   //   //   console.error(this.props.url, status, err.toString());
  //   //   // }.bind(this)
  //   // });
  // },


  handleCommentSubmit = (comment) => {
    //comment form data as an OBJECT comes into here as a comment variable
    var formattedComment = {}
    formattedComment.y = parseInt(comment.emotionLevel);
    formattedComment.x = new Date(comment.postDate);
    formattedComment.label = comment.text;

    // formattedComment.messageContent = comment.text;
    console.log("formatted comment is:", formattedComment);
    this.setState({ data: this.state.data.concat(formattedComment) });
  }

  testAjax = () => {
    $.ajax({
      type: "POST",
      url: '/',
      data: { name: "John", time: "2pm" },
      contentType: 'application/json; charset=UTF-8'
    })

    // $.post('/', { name: "John", time: "2pm" })
  }

  render () {
    return (
      <div className="commentBox">
        <button onClick={this.testAjax}> post invoked on click </button>
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        <Victory className="chart" dater={this.state.data} />
      </div>
    );
  }
};



  ReactDOM.render(<TopComponent />, document.getElementById('commentBox'));

