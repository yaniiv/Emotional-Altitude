import React from 'react';
 
var CommentForm = React.createClass({
  getInitialState: function() {
    return {text: '', emotionLevel: null, postDate: null};
  },

  handleTextChange: function(e) {
    // console.log(e)
    this.setState({text: e.target.value});
  },

  handleEmotionTextChange: function(e) {
    // console.log(e)
    this.setState({emotionLevel: e.target.value});
  },

  handleDateChange: function(e) {
    // console.log(e)
    this.setState({postDate: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    console.log(e)
    var text = this.state.text.trim();
    var emotionLevel = this.state.emotionLevel;
    var postDate = this.state.postDate;
    this.props.onCommentSubmit({text: text, emotionLevel: emotionLevel, postDate: postDate});
    this.setState({text: '', emotionLevel: '', postDate: ''});
  },

  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          className = "emotion-input"
          type="number"
          name="emotional level"
          min="0"
          max="100"
          placeholder="How do you feel on a scale of 1 to 100?"
          value={this.state.emotionLevel}
          onChange={this.handleEmotionTextChange}
        /> 
         <input
          className = "text-input"
          type="text"
          placeholder="Why do you feel that way?"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
         <input
          className = "date-input"
          type="date"
          name="date of feeling"
          value={this.state.postDate}
          onChange={this.handleDateChange}
        /> 
        <input type="submit" value="Submit State" />
      </form>
    );
  }
});

module.exports = CommentForm;