import React, { Component } from 'react';
import TaskFinishItem from './TaskFinishItem';
import TaskFinishItemAdmin from './TaskFinishItemAdmin';

class TaskFinishList extends Component {
    render() {
        return (                                                    
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Task Finish</h3>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        <TaskFinishItem />
                        <TaskFinishItemAdmin />
                    </ul>
                </div>
            </div>
        );
    }
}

export default TaskFinishList;
