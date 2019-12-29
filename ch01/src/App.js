import React from 'react';
import './App.css';

function App() {
  return (
    <div className="row">
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-info">
          <div className="panel-heading">ReactJs</div>
          <div className="panel-body">
            <ul className="list-group">
              <li className="list-group-item">Item 1</li>
              <li className="list-group-item">Item 2</li>
              <li className="list-group-item">Item 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
