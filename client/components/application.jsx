import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import ReactDOM from 'react-dom';
import Login from './login.jsx';
import Home from './home.jsx';
import Navbar from './nav-bar.jsx';


export default class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar/>
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
    </Route>
  </Router>
), document.getElementById('content'));