import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div>
        <Title />
        <div className="row">
          <Control />
          <Form />
        </div>
        <List />

      </div>
    );
  }
}

export default App;
