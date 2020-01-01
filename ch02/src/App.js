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
    this.closeForm = this.closeForm.bind(this);
  }

  handleToggleForm() {
    this.setState({
      isShowForm: !this.state.isShowForm
    })
  }

  closeForm() {
    this.setState({
      isShowForm: false
    })
  }
 
  render() {
    let items = this.state.items;
    let isShowForm = this.state.isShowForm;
    let elmForm = null;
    let elmButton = <button onClick={this.handleToggleForm} type="button" className="btn btn-info btn-block">Add Task</button>;

    if(isShowForm) {
      elmForm = <Form onClickCancel={ this.closeForm } />;
      elmButton = <button onClick={this.handleToggleForm} type="button" className="btn btn-success btn-block">Edit Task</button>;
    }
    

    return (
      <div>
        <Title />
        <div className="row">
          <Control />
          <div className="col-12 col-lg-6">
            <div className="form-group add-task">
            { elmButton }
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
