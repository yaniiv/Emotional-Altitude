import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store.js';
import HomeContainer from './pages/home/HomeContainer.jsx';
import HeaderContainer from './pages/header/HeaderContainer.jsx';

import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={HomeContainer}>
      <IndexRoute component={HomeContainer}/>
    </Route>
  </Router>
</Provider>, document.getElementById('content'));

// export default App; class App extends React.Component {   constructor() {
// super();   }   render() {     return (       <div>         <Navbar />
// {React.cloneElement(this.props.children, this.props)}       </div>     )   }
// }

      // <Route path="/login" component={Login}/>
      // <Route path="/signup" component={Signup}/>