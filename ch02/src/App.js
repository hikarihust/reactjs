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
      items: tasks,
      isShowForm: false
    };

    this.handleToggleForm = this.handleToggleForm.bind(this);
  }

  handleToggleForm() {
    this.setState({
      isShowForm: !this.state.isShowForm
    })
  }
 
  render() {
    let items = this.state.items;
    let isShowForm = this.state.isShowForm;
    let elmForm = null;

    if(isShowForm) {
      elmForm = <Form />;
    }

    return (
      <div>
        <Title />
        <div className="row">
          <Control />
          <div className="col-12 col-lg-6">
            <div className="form-group add-task">
            <button onClick={this.handleToggleForm} type="button" className="btn btn-info btn-block">Add Task</button>
            </div>
              { elmForm }
          </div>
        </div>
        <List items={ items } />
      </div>
    );
  }
}

export default App;
