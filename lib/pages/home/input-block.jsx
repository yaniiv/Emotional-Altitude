import React from 'react';
// import MySlider  from "./slider.jsx";
import store from '../../store.js';
import * as types from '../../actions/action-types.js';

import {connect} from 'react-redux';
import { Slider } from "@blueprintjs/core";
import { DatePicker } from "@blueprintjs/dateTime";

export default class InputBlock extends React.Component {
  constructor() {
    super()
    this.taglineStyle = { width: '400px' };
    this.descriptionStyle = { width: '400px', height:'150px' };
    
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
    this.handleSliderChange = this.handleSliderChange.bind(this)
    this.state = { sliderValue: 0 } 
  }
  
  handleCommentSubmit(e) {
    e.preventDefault();
        console.log("hi")
        console.log(this.state.sliderValue)

    this.state.sliderValue
    store.dispatch({
      type: types.ADD_DATA,
      feelsObj: {
        feelingNum: this.state.sliderValue,
        feelingTagline: e.target.elements[0].value,
        feelingDescriptiom: e.target.elements[0].value,
        feelingDate: new Date()
      }
    })
  }

  handleSliderChange(nextVal){
    this.setState({sliderValue: nextVal})
  }

  render () {
    return (
      <div id="inputBlock">
        <div id="input-slider"> 
        <label className="pt-label .modifier">
          What Is Your Emotional Altitude?  
         <Slider
          min={0}
          max={100}
          stepSize={1}
          labelStepSize={10}
          value={this.state.sliderValue}
          onChange={(value)=>{this.handleSliderChange(value)}}
          />          
          </label>
        </div>  

      <DatePicker/>  

      <form id="input-form" onSubmit={this.handleCommentSubmit}>
        <label className="pt-label .modifier">
          Emotion Tagline
          <input className="pt-input" type="text" placeholder="Text input" dir="auto" />
        </label>

        <label className="pt-label .modifier">
          Description
          <input className="pt-input" type="text" placeholder="Input group" dir="auto" />
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
