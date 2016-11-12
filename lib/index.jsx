import React from 'react';
import ReactDOM from 'react-dom';

import HomeContainer from './pages/home/HomeContainer.jsx';
import HeaderContainer from './pages/header/HeaderContainer.jsx';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import { store } from './store.js';



ReactDOM.render((
  <Provider store={store}>
    <div>
    <HeaderContainer/>
    <HomeContainer/>
    </div>
  </Provider>
), document.getElementById('content'));

export default App;





  //   <Router history={browserHistory}>
  //     <Route path="/" component={App} >
  //       <IndexRoute component={Home}/>
  //      <Route path="/home" component={Home} />
  //       <Route path="/login" component={Login} />
  //      <Route path="/signup" component={Signup} />
  //    </Route>
  //  </Router>

  // class App extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <div>
//         <Navbar />
//         {React.cloneElement(this.props.children, this.props)}
//       </div>
//     )
//   }
// }