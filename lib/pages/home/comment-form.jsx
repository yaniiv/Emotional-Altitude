import React from 'react';
import { Slider } from "@blueprintjs/core";


export default class CommentForm extends React.Component {
  constructor() {
    super()
  }
  
  render () {
    return (
      <div>
      <form className="commentForm" onSubmit={this.props.onCommentSubmit}>
        <input
          className = "emotion-input"
          type="number"
          name="emotional level"
          min="0"
          max="100"
          placeholder="How do you feel on a scale of 1 to 100?"
          /> 
        
         <input
          className = "text-input"
          type="text"
          placeholder="Why do you feel that way?"
        />
        <input type="submit" value="Submit State" />
        </form>
      </div> 
    );
  }
};

