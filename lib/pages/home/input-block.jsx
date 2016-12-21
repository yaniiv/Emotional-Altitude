import React from 'react';
import MySlider  from "./slider.jsx";
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
    // this.handleSliderChange = this.handleSliderChange.bind(this)
    this.state = {
      sliderValue: 0,
      selectedDate: new Date()
    } 
  }
  
  handleCommentSubmit(e) {
        e.preventDefault();
        console.log(e.target.childNodes)

        console.log(parseInt(e.target.childNodes[0].childNodes[0].childNodes[3].innerText))

    // console.log(e.target.childNodes[0].elements)
        console.log("hi")
        // console.log("sliderValue:", this.state.sliderValue)
        // console.log("dateValue:", this.state.selectedDate)

    // store.dispatch({
    //   type: types.ADD_DATA,
    //   feelsObj: {
    //     feelingNum: this.state.sliderValue,
    //     feelingTagline: e.target.elements[0].value,
    //     feelingDescriptiom: e.target.elements[0].value,
    //     feelingDate: this.state.selectedDate
    //   }
    // })
  }

  // handleSliderChange(nextVal){
  //   this.setState({sliderValue: nextVal})
  // }

  handleDateChange(newDate) {
    this.setState({selectedDate: newDate})
  }

  render () {
    return (
      <div id="inputBlock">
        

        <div id ="input-bottom-section">

   

          <form id="input-form" onSubmit={this.handleCommentSubmit}>
          
                  <MySlider />


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

             <DatePicker
          id ="input-date"
          value={this.state.selectedDate}
          onChange={(newDate) => {this.handleDateChange(newDate)}}
        />    

          </div>

    </div> 
    );
  }
};

        // <div id="input-slider"> 
        //   <label className="pt-label .modifier">
        //     What Is Your Emotional Altitude?    
        //   <Slider
        //     min={0}
        //     max={100}
        //     stepSize={1}
        //     labelStepSize={10}
        //     value={this.state.sliderValue}
        //     onChange={(value)=>{this.handleSliderChange(value)}}
        //   />          
        //   </label>
        // </div>



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
