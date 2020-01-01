import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

import tasks from './mocks/tasks'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: tasks
    };
  }
 
  render() {
    let items = this.state.items;

    return (
      <div>
        <Title />
        <div className="row">
          <Control />
          <Form />
        </div>
        <List items={ items } />

      </div>
    );
  }
}

export default App;
