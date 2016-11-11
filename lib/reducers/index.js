import { combineReducers } from 'redux';

// Reducers
import headerReducer from './header-reducer';
import homeReducer from './home-reducer';

// Combine Reducers
var reducers = combineReducers({
    headerState: headerReducer,
    homeState: homeReducer
})

export default reducers;