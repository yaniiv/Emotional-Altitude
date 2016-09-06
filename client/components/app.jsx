import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
render(){
      return (
       <div className = "calendar">
        This is a Calendar, now rendering a Weeks 
        </div >
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));

