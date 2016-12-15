import React from "react";

export default class MySlider extends React.component {
  constructor(){
    super();
    this.state = {sliderValue: 0} 
  }

  render(){
    return (
      <Slider
        min={0}
        max={100}
        stepSize={1}
         labelStepSize={10}
         onChange={(value) => {this.setState({ sliderValue: 0})}}
         value={this.state.value2}
      />
    )
  }
}