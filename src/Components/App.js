import React, { Component } from 'react';
import Navigation from './Navigation';
import ROUTING from './RoutingSwitcher';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <img className="main-bg" src="abstract-analog-art.jpg" />
        <div className="App">
          <Navigation/>      
        </div>
        {ROUTING}
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
