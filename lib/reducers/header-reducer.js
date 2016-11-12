import * as types from '../actions/action-types';

const initialState = {
  logo: 'Emotional Altitude',
  selectedIndex: 0,
  items: [
    { index: 0, label: 'HOME', route: '/' },
    { index: 1, label: 'GET STARTED', route: '/start', isSelected: false},
    { index: 2, label: 'GITHUB', route: 'https://www.github.com', isSelected: false}
  ]
};

const headerReducer = (state = initialState, action) => {
  console.log('current state ', state)
  switch(action.type){
    case types.NAVIGATE:
      return Object.assign({}, state, {
         selectedIndex: action.selectedIndex,
          //map over items...return new array state
         items: state.items.map((items, i) => {
           item.isSelected = i === action.selectedIndex;
           return item;
         })
      })
    }
  return state;
}

export default headerReducer;
