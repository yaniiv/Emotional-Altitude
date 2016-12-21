import React from 'react';

import Victory from './emotion-chart.jsx';
import InputBlock from './input-block.jsx';

import {connect} from 'react-redux';
import store from '../../store.js';


class HomeContainer extends React.Component {
  render() {
    return (
      <div id="row1-content">
        <Victory emotionData={this.props.data}/>
        <InputBlock  />
      </div>
    )
  }
}

const mapStateToProps = function (store) {
  return {data: store.homeState.data}
}

export default connect(mapStateToProps)(HomeContainer)


