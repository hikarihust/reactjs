import React from 'react';
import Lesson from './Lesson'

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function Course() {
  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className="panel panel-info">
        <div className="panel-heading">ReactJs</div>
        <div className="panel-body">
          { formatName(user) }
          { 2 + 2 }
          <ul className="list-group">
            <Lesson />
            <Lesson />
            <Lesson />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Course;
