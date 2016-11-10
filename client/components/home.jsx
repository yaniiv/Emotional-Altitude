import React from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';
import $ from 'jquery';
import Victory from './chart.jsx';
import CommentForm from './comment_form.jsx';


export default class TopComponent extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(e) {
    e.preventDefault();
    console.log('feeling data before adding new feels: \n', this.state.data)
    
    const feeling = {
      feelingNum: e.target.elements[0].valueAsNumber,
      feelingText: e.target.elements[1].value,
      feelingDate: new Date()
    };
    console.log("new feeling data point to add", feeling);
    
    const feelingData = this.state.data;
    feelingData.push(feeling);
    this.setState({ data: feelingData });

    console.log('feeling data after adding new feels: \n', this.state.data)

  }

  render() {
    return (
      <div className="commentBox">
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        <Victory className="chart" emotionData={this.state.data} />
      </div>
    );
  }
}
// ReactDOM.render(<TopComponent />, document.getElementById('commentBox'));

