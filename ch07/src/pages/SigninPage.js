import React, { Component } from 'react';
import FormSign from '../components/FormSign';

class SigninPage extends Component {
    render() {
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

export default SigninPage;
