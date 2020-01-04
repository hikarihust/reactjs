import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import { filter, includes, orderBy as funcOrderBy } from 'lodash';

import tasks from './mocks/tasks'
import Search from './components/Search';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: tasks,
      isShowForm: false,
      strSearch: '',
      orderBy: 'name',
      orderDir: 'asc'
    };

    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort = (orderBy, orderDir) => {
    this.setState({
        orderBy: orderBy,
        orderDir: orderDir
    });
}

  handleToggleForm() {
    this.setState({
      isShowForm: !this.state.isShowForm
    })
  }

  handleSearch(value) {
    this.setState({
      strSearch: value
    })
  }

  closeForm() {
    this.setState({
      isShowForm: false
    })
  }
 
  render() {
    let itemsOrigin = [...this.state.items];
    let items       = [];
    let elmForm = null;
    let elmButton = <button onClick={this.handleToggleForm} type="button" className="btn btn-info btn-block">Add Task</button>;
    let { orderBy, orderDir, isShowForm, strSearch } = this.state;

    // Search
    // if(search.length > 0) {
    //   itemsOrigin.forEach((item) => {
    //     if(item.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1) {
    //       items.push(item);
    //     }
    //   })
    // } else {
    //   items = itemsOrigin;
    // }
    items = filter(itemsOrigin, (item) => {
      return includes(item.name.toLowerCase(), strSearch.toLowerCase());
    });

    // Sort
    items = funcOrderBy(items, [ orderBy ], [ orderDir ])

    if(isShowForm) {
      elmForm = <Form onClickCancel={ this.closeForm } />;
      elmButton = <button onClick={this.handleToggleForm} type="button" className="btn btn-success btn-block">Edit Task</button>;
    }
    

    return (
      <div>
        <Title />
        <div className="row">
          <Control
            orderBy={ orderBy } 
            orderDir={ orderDir } 
            onClickSort={ this.handleSort }
            onClickSearchGo={ this.handleSearch }
          />
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
