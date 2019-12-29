import React from 'react';
import './App.css';
import Course from './components/Course'

function App() {
  return (
    <div className="row">
      <Course name="ReactJS" time="30h" free={true}>ReactJS is very simple</Course>
      <Course name="Angular 4x" time="50h" free={false} />
      <Course name="NodeJS" time="35h" free={true} />
    </div>
  );
}

export default App;
