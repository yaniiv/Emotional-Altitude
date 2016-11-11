import * as types from '../actions/action-types';

const initialState = {
  data: []
};

const headerReducer = (state = initialState, action){
  switch(action.type){
    case types.ADD_DATA:
      return Object.assign({}, state, {data: [{
        feelingNum: '77',
        feelingText: 'Im good',
        feelingDate: new Date()
      }]
    })
  }
  return state;
}

export default headerReducer;
