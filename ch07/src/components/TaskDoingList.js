import React, { Component } from 'react';
import FormAddTask from './FormAddTask';
import TaskDoingItem from './TaskDoingItem';
import { tasksRef } from './../firebase';

class TaskDoingList extends Component {
    constructor(props) {
		super(props);

		this.state = {
            items: []
		};
    }

    UNSAFE_componentWillMount(){
        tasksRef.on('value', items => {
            let data = [];
            items.forEach(item => {
                const {email, name} = item.val();
                data.push({email, name, key: item.key} );
            })

            this.setState({items: data});
        })
    }

    render() {
        let { items } = this.state;
        console.log(items);
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
