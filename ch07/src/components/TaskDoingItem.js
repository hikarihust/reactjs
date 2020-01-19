import React, { Component } from 'react';
import FormAddTask from './FormAddTask';

class TaskDoingItem extends Component {
    render() {
        let item = {name: '', email: ''};
        item = this.props.item || item;
        return (                            
            <li className="list-group-item">
                <p className="task">{ item.name }</p>
                <span className="author">
                    <span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;{ item.email }
                </span>
                <button type="button" className="btn btn-warning btn-xs">Completed</button>
            </li>
        );
    }
}

export default TaskDoingItem;
