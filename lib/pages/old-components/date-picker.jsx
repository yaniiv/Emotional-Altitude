import React from "react";
import { DatePicker } from "@blueprintjs/dateTime";


export default class MyDatePicker extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedDate: new Date(),
    } 
  }
  
  handleDateChange(newDate) {
    this.setState({selectedDate: newDate})
  }

  render(){
  return (
      <div id ="input-date">
       <DatePicker
          
          value={this.state.selectedDate}
          onChange={(newDate) => {this.handleDateChange(newDate)}}
         />    
      </div>

    )
  }
}
