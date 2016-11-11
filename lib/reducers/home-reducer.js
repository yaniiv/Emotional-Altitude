import * as types from '../actions/action-types';

const initialState = {
  data: []
};

const homeReducer = (state = initialState, action){
  switch(action.type){
    case types.ADD_DATA:
      return Object.assign({}, state, {data: ['testdataadd']})
  }
  return state;

}

export default homeReducer;