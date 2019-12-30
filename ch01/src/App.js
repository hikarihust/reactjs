import React from 'react';
import './App.css';
import Course from './components/Course'

function App() {
  const items = [
    {
      name: 'ReactJS',
      time: '30h',
      free: false,
      desc: 'ReactJS is very simple'
    },
    {
      name: 'Angular 4x',
      time: '50h',
      free: true,
    },
    {
      name: 'NodeJS',
      time: '35h',
      free: true
    }
  ];

  const elmCourses = items.map((item, index) =>
    <Course key={ index } name={ item.name } time={ item.time } free={ item.free }>{ item.desc }</Course>
  );

  return (
    <div className="row">
      { elmCourses }
    </div>
  );
}

export default App;
