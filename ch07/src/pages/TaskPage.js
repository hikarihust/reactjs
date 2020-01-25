import React, { Component } from 'react';
import {connect} from 'react-redux';

import TaskDoingList from '../components/TaskDoingList';
import TaskFinishList from '../components/TaskFinishList';
import TaskFinishListAdmin from '../components/TaskFinishListAdmin';

class TaskPage extends Component {
    render() {
        let {user} = this.props;

        return (                            
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <TaskDoingList user={user} />
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    { this.showTaskFinishList(user) }
                </div>
            </div>
        );
    }

    showTaskFinishList(user) {
        if (user.info.isAdmin) {
            return <TaskFinishListAdmin user={user} />
        } else {
            return <TaskFinishList user={user} />
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(TaskPage);
