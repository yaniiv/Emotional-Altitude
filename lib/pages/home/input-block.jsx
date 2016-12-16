import React from 'react';
import MySlider  from "./slider.jsx";

export default class InputBlock extends React.Component {
  constructor() {
    super()
    this.taglineStyle = { width: '400px' };
    this.descriptionStyle = { width: '400px', height:'150px' };
    
    this.state = { sliderValue: 0 } 
    this.handeSliderChange = this.handleSliderChange.bind(this);
  

  }
  
  handleCommentSubmit(e) {
    // console.log(e.target.elements
    // )
    e.preventDefault();
    // store.dispatch({
    //   type: types.ADD_DATA,
    //   feelsObj: {
    //     feelingNum: e.target.elements[0].valueAsNumber,
    //     feelingText: e.target.elements[1].value,
    //     feelingDate: new Date()
    //   }
    // })
  }

  handleSliderChange(){
    // console.log(newVal)
    document.getElementByID("Slider")
    // this.setState({sliderValue: newVal})
  }

  render () {
    return (
      <div>
        <label className="pt-label .modifier">
          What Is Your Emotional Altitude?
          
          <MySlider sliderValue={this.state.sliderValue} handeSliderChange={this.handleSliderChange} />
          
        </label>

      <form className="commentForm" onSubmit={this.handleCommentSubmit}>

      

        <label className="pt-label .modifier">
          Emotion Tagline
          <input className="pt-input" style={this.taglineStyle} type="text" placeholder="Text input" dir="auto" />
        </label>

        <label className="pt-label .modifier">
          Description
          <input className="pt-input" style={this.descriptionStyle} type="text" placeholder="Input group" dir="auto" />
        </label>

        <input type="submit" value="Submit State" />
        </form>
      </div> 
    );
  }
};


        //  <input
        //   className = "text-input pt-input"
        //   type="text"
        //   placeholder="Why do you feel that way?"
        // />
// import React from "react";
// import {connect} from 'react-redux';
// import { Slider } from "@blueprintjs/core";
// import store from '../../store.js';
// import * as types from '../../actions/action-types.js';

// export  MySlider extends  {
//   return (
//       <div>
//         <Slider
//           min={0}
//           max={100}
//           stepSize={1}
//           labelStepSize={10}
//           value={props.sData}
//           onChange={(value) => {store.dispatch({type:types.SLIDER, sliderData:value})}}
//         />
//       </div>
//     )
// }
// const mapStateToProps = function (store) {
//   return {sData: store.headerState.sData}
// }

// export default connect(mapStateToProps)(MySlider)
