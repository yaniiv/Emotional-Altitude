import * as types from '../actions/action-types';

const initialState = {
  data: []
};

const homeReducer = (state = initialState, action) => {
  switch(action.type){
    case types.ADD_DATA:

      console.log('action', action)
      //Do not mutate state
      let updatedData = state.data.slice();
      updatedData.push(action.feelsObj)

      console.log('new state', updatedData)

      return Object.assign({}, state, {
        data: updatedData
    })
  }
  return state;
}

export default homeReducer;
