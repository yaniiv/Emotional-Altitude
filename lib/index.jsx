import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store.js';
import HomeContainer from './pages/home/home-container.jsx';
import Login from './pages/landing/login.jsx';
import MyNav from './pages/home/my-nav.jsx';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <MyNav />
        {this.props.children}
      </div>
    )
  }
}


ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={HomeContainer}/>    
    </Route>
  </Router>
</Provider>, document.getElementById('content'));
