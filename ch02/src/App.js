import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="row">
        <div className="page-header">
          <h1>Project 01 - ToDo List <small>VueJs</small></h1>
        </div>
        {/* TITLE : END */}
        <div className="row">
          {/* CONTROL (SEARCH + SORT + ADD) : START */}
          <div className="col-12 col-lg-6">
            <div className="row">
              {/* SORT : START */}
              <div className="col-12">
                <div className="form-group">
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Sort by
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">Name ASC</a>
                      <a className="dropdown-item" href="#">Name DESC</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Level ASC</a>
                      <a className="dropdown-item" href="#">Level DESC</a>
                    </div>
                    <span className="badge badge-success badge-medium">NAME - DESC</span>
                  </div>
                </div>
              </div>
              {/* SORT : END */}
              {/* SEARCH : START */}
              <div className="col-12">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search for..." />
                  <span className="input-group-append">
                    <button className="btn btn-info" type="button">Clear!</button>
                  </span>
                </div>
              </div>
              {/* SEARCH : END */}
            </div>
          </div>
          {/* CONTROL (SEARCH + SORT + ADD) : END */}
          {/* FORM : START */}
          <div className="col-12 col-lg-6">
            {/* ADD : START */}
            <div className="form-group add-task">
              <button type="button" className="btn btn-info btn-block">Add Task</button>
            </div>
            {/* ADD : END */}
            <form action method="POST" className="form-inline justify-content-between">
              <div className="form-group">
                <label className="sr-only" htmlFor>label</label>
                <input type="text" className="form-control" placeholder="Task Name" />
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor>label</label>
                <select name="ds" className="form-control" required="required">
                  <option value={0}>Small</option>
                  <option value={1}>Medium</option>
                  <option value={2}>High</option>
                </select>
              </div>
              <button type="button" className="btn btn-primary">Submit</button>
              <button type="button" className="btn btn-secondary">Cancel</button>
            </form>
          </div>
          {/* FORM : END */}
        </div>
        {/* LIST : START */}
        <div className="panel panel-success">
          <div className="panel-heading">List Task</div>
          <table className="table table-hover ">
            <thead>
              <tr>
                <th style={{width: '10%'}} className="text-center">#</th>
                <th>Task</th>
                <th style={{width: '20%'}} className="text-center">Level</th>
                <th style={{width: '160px'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1</td>
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c</td>
                <td className="text-center"><span className="badge badge-danger">High</span></td>
                <td>
                  <button type="button" className="btn btn-warning">Edit</button>
                  <button type="button" className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="text-center">2</td>
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c</td>
                <td className="text-center"><span className="badge badge-secondary">Small</span></td>
                <td>
                  <button type="button" className="btn btn-warning">Edit</button>
                  <button type="button" className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="text-center">3</td>
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c</td>
                <td className="text-center"><span className="badge badge-info">Medium</span></td>
                <td>
                  <button type="button" className="btn btn-warning">Edit</button>
                  <button type="button" className="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
