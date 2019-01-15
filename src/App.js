import React, { Component } from 'react';
import { Header, Profile } from './Component/index'
import './Assets/FontAwesome'

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
