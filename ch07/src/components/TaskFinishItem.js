import React, { Component } from 'react';

class TaskFinishItem extends Component {
    render() {
        return (                                                    
            <li className="list-group-item">
                <p className="task">CSS is too bad</p>
                <span className="author">
                    <span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;admin@gmail.com
                </span>
            </li>
        );
    }
}

export default TaskFinishItem;
