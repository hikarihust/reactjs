import React, { Component } from 'react';
import FormAddTask from './FormAddTask';
import TaskDoingItem from './TaskDoingItem';

class TaskDoingList extends Component {
    render() {
        return (                            
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Task Doing</h3>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        <TaskDoingItem />
                        <TaskDoingItem />
                        <TaskDoingItem />
                    </ul>
                </div>
                <div className="panel-footer text-right">
                    <FormAddTask />
                </div>
            </div>
        );
    }
}

export default TaskDoingList;
