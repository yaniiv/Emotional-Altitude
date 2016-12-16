import * as types from '../actions/action-types';

const initialState = {
  loggedIn: false,
  sData : 7
};

const headerReducer = (state = initialState, action) => {
  console.log('old state ', state)
  switch(action.type){
    case types.LOGIN:
      return Object.assign({}, state, { loggedIn: action.loggedIn })
  
    case types.SLIDER:
      return Object.assign({}, state, { sData: action.sliderData })
    }
  return state;
  
}

export default headerReducer;
