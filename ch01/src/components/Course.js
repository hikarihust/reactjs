import React, { Component } from 'react';
import Lesson from './Lesson'

class Course extends Component {

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick3 = this.handleClick3.bind(this);
    this.registerCourse = this.registerCourse.bind(this);
  }

  handleClick1() {
    alert("view 1")
  }

  handleClick2(content) {
    alert(content)
  }

  handleClick3() {
    alert(this.props.name)
  }

  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  registerCourse() {
    console.log(this.refs.username.value);
  }

  showButtonFree() {
    const isFree = this.props.free;
    console.log("isFree", isFree);
    if(isFree === true) {
      return (
            <div className="btn-group">
              <button type="button" onClick={ this.handleClick1 } className="btn btn-warning">view1</button>
              <button type="button" onClick={ () => this.handleClick2("view 2") } className="btn btn-danger">view2</button>
              <button type="button" onClick={ () => this.handleClick3() } className="btn btn-success">view3</button>
            </div>
      )
    } else {
      return (
          <div className="input-group">
            <span className="input-group-btn">
              <button onClick={ this.registerCourse } className="btn btn-info" type="button">Register</button>
            </span>
            <input type="text" className="form-control" placeholder="username..." ref="username" />
          </div>
      )
    }
  }

  render() {
    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    }

    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-info">
          <div className="panel-heading">{ this.props.name }</div>
          <div className="panel-body">
            { this.formatName(user) }
            { 2 + 2 }
            <p>{ this.props.time }</p>
            <p>{ this.props.children }</p>
            <ul className="list-group">
              <Lesson />
              <Lesson />
              <Lesson />
            </ul>
          </div>
          <div className="panel-footer">
            { this.showButtonFree() }
          </div>
        </div>
      </div>
    );
  }
}

export default Course;
