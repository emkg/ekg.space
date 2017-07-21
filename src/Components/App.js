import React, { Component } from 'react';
import Main from  './Main';
import ProjectList from './ProjectList'
import Space from './Space';

const showMain = false;

class App extends Component {
  render() {
    if(showMain) {
      return (
        <div>
          <Main />
        </div>
      );
    }
    else {
      return (
        <div>
          <Space />
        </div>
      );
    }
  }
}

export default App;
