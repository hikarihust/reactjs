import React, { Component } from 'react';
import TaskDoingList from '../components/TaskDoingList';
import TaskFinishList from '../components/TaskFinishList';

class TaskPage extends Component {
    render() {
        return (                            
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <TaskDoingList />
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <TaskFinishList />
                </div>
            </div>
        );
    }
}

export default TaskPage;
