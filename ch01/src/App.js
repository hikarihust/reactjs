// import React from 'react';
import './App.css';
import Course from './components/Course';
import React, { Component } from 'react';
import Lifecycle from './components/Lifecycle';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        items: [
            {
                name: 'ReactJS',
                time: '30h',
                free: false,
                desc: 'ReactJS is very simple!'
            },
            {
                name: 'Angular 4x',
                time: '55h',
                free: true,
            },
            {
                name: 'NodeJS',
                time: '35h',
                free: true,
            }
        ]
    };
}


  render() {
  
    let elmCourses = this.state.items.map((item, index) =>
      <Course key={ index } name={ item.name } time={ item.time } free={ item.free }>{ item.desc }</Course>
    );

    elmCourses = null;
    
    return (
      <div className="row">
        { elmCourses }
        <Lifecycle />
      </div>
    )
  }
}

export default App;
