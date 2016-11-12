import { createStore } from 'redux';
import reducers from './reducers/combine-reducers';

const store = createStore(reducers);
export default store;