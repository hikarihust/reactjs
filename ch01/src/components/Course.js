import React from 'react';
import Lesson from './Lesson'

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}

function showButtonFree(props) {
  const isFree = props.free;
  console.log("isFree", isFree);
  if(isFree === true) {
    return <div className="panel-footer">
            <button type="button" className="btn btn-warning">view</button>
          </div>
  }
}

function Course(props) {
  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className="panel panel-info">
        <div className="panel-heading">{ props.name }</div>
        <div className="panel-body">
          { formatName(user) }
          { 2 + 2 }
          <p>{ props.time }</p>
          <p>{ props.children }</p>
          <ul className="list-group">
            <Lesson />
            <Lesson />
            <Lesson />
          </ul>
        </div>
        { showButtonFree(props) }
      </div>
    </div>
  );
}

export default Course;
