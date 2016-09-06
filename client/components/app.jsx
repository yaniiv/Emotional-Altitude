import React from 'react';
import ReactDOM from 'react-dom';
import World from './world.jsx';
import postButton from './postButton.jsx';



class App extends React.Component {
render(){
      return (
          <div>
          poops
          <p> i'm so fucking cofused right now </p>
            <postButton />
            <World />
            <DeleteAccount/>
        </div>
    )
  }
}

const DeleteAccount = () => (
  <div>
    <p>Are you sure?</p>
    <button>Yep</button>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

