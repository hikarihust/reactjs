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

    // this.state = {
    //   items: [],
    //   itemSelected: null,
    //   isShowForm: false,
    //   strSearch: '',
    //   orderBy: 'name',
    //   orderDir: 'asc'
    // };

    this.closeForm = this.closeForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  UNSAFE_componentWillMount(){
    let items = JSON.parse(localStorage.getItem('task')) || [];
    this.setState({
        items       : items
    })
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
    let { orderBy, orderDir, isShowForm, strSearch, itemSelected } = this.state;

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
            <ToggleForm />
            <Form itemSelected={ itemSelected } onClickSubmit={ this.handleSubmit } onClickCancel={ this.closeForm } />
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
