import React from 'react';
import * as types from '../../actions/action-types.js';
import Nav from './Nav.jsx';

import store from '../../store.js';
import { connect } from 'react-redux'; 


class HeaderContainer extends React.Component {
  constructor(){
    super()
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(index){
    console.log(index)
    store.dispatch({
      type: types.NAVIGATE,
      selectedIndex: index 
    })
  }

  render(){
   return (
      <div>
        <div>
          <Nav items={this.props.items} handler={this.handleNavClick} />
        </div>
      </div>
   )
  }
}

const mapStateToProps = function(store){
  return {
    selectedIndex: store.headerState.selectedIndex,
    items: store.headerState.items
  }
}

export default connect(mapStateToProps)(HeaderContainer);