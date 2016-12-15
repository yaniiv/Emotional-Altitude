import React from 'react';
import { Slider } from "@blueprintjs/core";

export default class CommentForm extends React.Component {
  constructor() {
    super()
  }
  
  getChangeHandler(key) {
    return (value) => {this.setState({ [key]: value })};
  }

  render () {
    return (
      <div>

        <Slider
                    min={0}
                    max={100}
                    stepSize={1}
                    labelStepSize={10}
                    onChange={(value) => {console.log(value); this.setState({ value2: value })}}
                    value={this.state.value2}
      />

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

