import React from 'react';
import Lesson from './Lesson'

function Course() {
  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className="panel panel-info">
        <div className="panel-heading">ReactJs</div>
        <div className="panel-body">
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
