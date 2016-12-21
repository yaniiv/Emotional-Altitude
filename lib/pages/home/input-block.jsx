import React from 'react';
import MySlider  from "./slider.jsx";
import store from '../../store.js';
import * as types from '../../actions/action-types.js';
import MyForm from "./form-text.jsx"
import {connect} from 'react-redux';
import { DatePicker } from "@blueprintjs/dateTime";
import { OurToaster } from "./toaster.jsx";


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


  // postDataToDB(feeling) {   $.ajax({     type: "POST",     url:
  // "http://localhost:7777/postUserData",     data: userInfo,     success:
  // function () {       console.log('success')     }   }) }


  handleDateChange(newDate) {
    this.setState({ selectedDate: newDate })
     OurToaster.show({ message: "Remember to sign in to have your own personal logger!" })
  }

  render () {
    return (
      <div id="inputBlock">
        
        <MySlider />
        
        <div id="input-bottom-section">
          
        <MyForm  handleCommentSubmit={this.handleCommentSubmit}/>

        <div id ="input-date">
          <DatePicker
            value={this.state.selectedDate}
            onChange={(newDate) => {this.handleDateChange(newDate)}}
          />    
          </div>
        </div>  

    </div> 
    );
  }
};
