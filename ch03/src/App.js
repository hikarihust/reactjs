import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';
import Sort from './components/Sort';
import ToggleForm from './components/ToggleForm';

import Search from './components/Search';

class App extends Component {

  render() {
    return (
      <div>
        <Title />
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="row">
              <Sort />
              <Search />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <ToggleForm />
            <Form />
          </div>
        </div>
        <List />
      </div>
    );
  }
}

export default App;
