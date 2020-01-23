import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

import FormSign from '../components/FormSign';

class SigninPage extends Component {
    render() {
        let { user } = this.props;

        if (user.isLogin) {
            return <Redirect to="/user" />;
        }
        return (                            
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Sign In</h3>
                </div>
                <div className="panel-body">
                    <FormSign />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(SigninPage);