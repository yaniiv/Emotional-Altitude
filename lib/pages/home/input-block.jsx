import React from 'react';
import MySlider  from "./slider.jsx";
import store from '../../store.js';
import * as types from '../../actions/action-types.js';
import MyForm from "./form-text.jsx"
import {connect} from 'react-redux';
import { Slider } from "@blueprintjs/core";
import { DatePicker } from "@blueprintjs/dateTime";


export default class InputBlock extends React.Component {
  constructor() {
    super()
    // this.taglineStyle = { width: '400px' };
    // this.descriptionStyle = { width: '400px', height:'150px' };
    
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
    this.state = {
      selectedDate: new Date()
    } 
  }
  
  handleCommentSubmit(e) {
        e.preventDefault();

       let slider = parseInt(document.getElementById('input-slider').childNodes[0].childNodes[3].innerText)

    store.dispatch({
      type: types.ADD_DATA,
      feelsObj: {
        feelingNum: slider,
        feelingTagline: e.target.elements[0].value,
        feelingDescriptiom: e.target.elements[0].value,
        feelingDate: this.state.selectedDate
      }
    })
  }

  handleDateChange(newDate) {
    this.setState({selectedDate: newDate})
  }

  render () {
    return (
      <div id="inputBlock">
        
        <MySlider />
        
        <div id="input-bottom-section">
          
        <MyForm  handleCommentSubmit={this.handleCommentSubmit}/>

        <div id ="input-date" />
          <DatePicker
            value={this.state.selectedDate}
            onChange={(newDate) => {this.handleDateChange(newDate)}}
          />    
        </div>

    </div> 
    );
  }
};

        // <div  
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
