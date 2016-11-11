import { combineReducers } from 'redux';

// Reducers
import headerReducer from './header-reducer';
import homeReducer from './homeReducer';
import aboutReducer from './aboutReducer';

// Combine Reducers
var reducers = combineReducers({
    headerState: headerReducer,
    homeState: homeReducer,
    aboutState: aboutReducer
})

export default reducers;