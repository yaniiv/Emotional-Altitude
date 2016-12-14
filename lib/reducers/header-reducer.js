import * as types from '../actions/action-types';

const initialState = {
  loggedIn: false
};

const headerReducer = (state = initialState, action) => {
  console.log('current state ', state)
  switch(action.type){
    case types.LOGIN:
      console.log("old login state", state)
      // let switchLoggedIn = !action.loggedIn;
      console.log("new login state", action.loggedIn)
      return Object.assign({}, state, { loggedIn: action.loggedIn })
    }
  return state;
}

export default headerReducer;
