import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import ToggleForm from './components/ToggleForm';
import { filter, includes, orderBy as funcOrderBy, remove, reject } from 'lodash';

// import tasks from './mocks/tasks'
import Search from './components/Search';

const uuidv4 = require('uuid/v4');

class App extends Component {

  state = {
    items: [],
    itemSelected: null,
    isShowForm: false,
    strSearch: '',
    orderBy: 'name',
    orderDir: 'asc'
  };

  constructor(props) {
    super(props);

    this.handleSort = this.handleSort.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleSubmit(item) {
    let items = [...this.state.items];
    let id = null;
    if(item.id) { // Edit
      items = reject(items, { id: item.id });
      id = item.id;
    } else { // Add
      id = uuidv4();
    }

    items.push({
      id      : id,
      name    : item.name,
      level   : +item.level // 0 Small, 1 Medium, 2 High
    });

    this.setState({
      items: items,
      isShowForm: false
    });

    // Save
    localStorage.setItem("task", JSON.stringify(items));
  }

  handleEdit(item) {
    this.setState({
      itemSelected: item,
      isShowForm: true
    });
  }

  handleDelete(id) {
    let items = [...this.state.items];
    remove(items, (item)=> {
        return item.id === id;
    });
    this.setState({
        items: items
    });
    
    // Save
    localStorage.setItem("task", JSON.stringify(items));
  }

  handleSort = (orderBy, orderDir) => {
    this.setState({
        orderBy: orderBy,
        orderDir: orderDir
    });
}
 
  render() {
    let items       = [];
    let { orderBy, orderDir, strSearch, itemSelected } = this.state;

    // Sort
    items = funcOrderBy(items, [ orderBy ], [ orderDir ])
    
    return (
      <div>
        <Title />
        <div className="row">
          <Control
            orderBy={ orderBy } 
            orderDir={ orderDir } 
            onClickSort={ this.handleSort }
          />
          <div className="col-12 col-lg-6">
            <ToggleForm />
            <Form itemSelected={ itemSelected } onClickSubmit={ this.handleSubmit } />
          </div>
        </div>
        <List
          onClickEdit={ this.handleEdit }
          onClickDelete={ this.handleDelete }
        />
      </div>
    );
  }
}

export default App;
