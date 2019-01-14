import React, { Component } from 'react';
import Header from './Component/Header'
import Profile from './Component/Profile'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header
          brandName='Mohd Maroof Resume'
        />
        <Profile />
      </React.Fragment>
    );
  }
}

export default App;
