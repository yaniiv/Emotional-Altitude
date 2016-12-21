import React from "react";
import {connect} from 'react-redux';
import { Slider } from "@blueprintjs/core";
import store from '../../store.js';
import * as types from '../../actions/action-types.js';

export default class MySlider extends React.Component {
  constructor() {
    super()
    this.state = {
      sliderValue: 0,
    } 
  }
  
  handleSliderChange(nextVal) {
    this.setState({sliderValue: nextVal})
  }

  render(){
    console.log()
  return (
      <div id="input-slider">
        <Slider
          min={0}
          max={100}
          stepSize={1}
          labelStepSize={10}
          value={this.state.sliderValue}
          onChange={(value) => {this.handleSliderChange(value)}}
        />
      </div>
    )
  }
}


// const MySlider = (props) => {
//   return (
//       <div>
//         <Slider
//           id="Slider"
//           min={0}
//           max={100}
//           stepSize={1}
//           labelStepSize={10}
//           value={props.sliderValue}
//           onChange={props.handeSliderChange()}}
//         />
//       </div>
//     )
//   }
// export default MySlider
