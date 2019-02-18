import React, { Component } from 'react';
import Navigation from './Navigation';
import ROUTING from './RoutingSwitcher';
import Foooter from './Footer';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="overlay"></div>
        <div className="App">
          <Navigation/>      
        </div>
        {ROUTING}
        <Foooter/>
      </React.Fragment>
    );
  }
}

export default App;
