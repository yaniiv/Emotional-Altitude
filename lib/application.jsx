import React from 'react';
import ReactDOM from 'react-dom';
import Login from './compenents/login.jsx';
import Home from './compenents/home.jsx';
import Signup from './compenents/signup.jsx';
import Navbar from './compenents/nav-bar.jsx';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Route>
  </Router>
), document.getElementById('content'));

export default App;