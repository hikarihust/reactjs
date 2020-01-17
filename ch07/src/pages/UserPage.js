import React, { Component } from 'react';
import FormUser from '../components/FormUser';

class UserPage extends Component {
    render() {
        return (                            
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">User</h3>
                </div>
                <div className="panel-body">
                    <FormUser />
                </div>
            </div>
        );
    }
}

export default UserPage;
