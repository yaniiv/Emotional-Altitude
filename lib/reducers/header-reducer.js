import * as types from '../actions/action-types';

const initialState = {
  loggedIn: false
};

const headerReducer = (state = initialState, action) => {
  console.log('current state ', state)
  switch(action.type){
    case types.LOGIN:
      console.log("old", state)
      let switchLoggedIn = !action.loggedIn;
      console.log("new", switchLoggedIn)
      return Object.assign({}, state, { loggedIn: switchLoggedIn })
    }
  return state;
}

export default headerReducer;
