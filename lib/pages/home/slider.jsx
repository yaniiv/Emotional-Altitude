import React from "react";
import { Slider } from "@blueprintjs/core";

const MySlider = (props) => {
  return (
      <div>
      <Slider
        min={0}
        max={100}
        stepSize={1}
         labelStepSize={10}
         value={props.sliderValue}
      />
      </div>
    )
  }

export default MySlider;
        //  onChange={(value) => {console.log(value); this.setState({ sliderValue: value})}}
