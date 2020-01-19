import React, { Component } from 'react';
import {connect} from 'react-redux';

import { actChangeNotify } from '../actions';
import TaskFinishItem from './TaskFinishItem';
import TaskFinishItemAdmin from './TaskFinishItemAdmin';
import { tasksCompletedRef } from './../firebase';

class TaskFinishList extends Component {
    constructor(props) {
		super(props);

		this.state = {
            items: []
		};
    }

    handleClear = () => {

    }

    UNSAFE_componentWillMount(){
        tasksCompletedRef.on('value', items => {
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
        let isAdmin = true;

        return (                                                    
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Task Finish</h3>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        { this.showElementBody(items, isAdmin) }
                    </ul>
                </div>
                <div className="panel-footer text-right">
                    <button onClick={this.handleClear} type="button" className="btn btn-danger">Clear All</button>
                </div>
            </div>
        );
    }

    showElementBody(items, isAdmin){
		let xhtml = null;
		if(items.length > 0 ){
            xhtml = items.map((item, index)=> {
                if (isAdmin) {
                    return (
                        <TaskFinishItemAdmin changeNotify={this.props.changeNotify} key={index } item={item} index={index}/>
                    );
                } else {
                    return (
                        <TaskFinishItem key={index } item={item} index={index}/>
                    );
                }
            });
            return <ul className="list-group">{xhtml}</ul>;
        }else{
            return <h4>Loading</h4>;
        }
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeNotify: (style, title, content) => {
			dispatch(actChangeNotify(style, title, content));
		}
	}
}

export default connect(null, mapDispatchToProps)(TaskFinishList);

