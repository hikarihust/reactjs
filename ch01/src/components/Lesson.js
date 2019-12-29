import React from 'react';

function Lesson() {
  // return (
  //   <li className="list-group-item">Item 1</li>
  // );
  return React.createElement('li', { className: 'list-group-item' }, 'React 123')
}

export default Lesson;
