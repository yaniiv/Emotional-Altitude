import React from "react";
import {connect} from 'react-redux';
import { Slider } from "@blueprintjs/core";
import store from '../../store.js';
import * as types from '../../actions/action-types.js';

const MySlider = (props) => {
  return (
      <div>
        <Slider
          min={0}
          max={100}
          stepSize={1}
          labelStepSize={10}
          value={props.sData}
          onChange={(value) => {store.dispatch({type:types.SLIDER, sliderData:value})}}
        />
      </div>
    )
}
const mapStateToProps = function (store) {
  return {sData: store.headerState.sData}
}

export default connect(mapStateToProps)(MySlider)
