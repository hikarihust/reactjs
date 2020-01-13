import React, { Component } from 'react';
import {actLogin} from './../actions/index';
import {connect} from 'react-redux';

class FormLogin extends Component {
	constructor(props) {
        super(props);

        this.state = {
			username: '',
			password: ''
        };
    }

	handleChange = (event) => {
        const target = event.target;    // input selectbox
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name   = target.name;

        this.setState({
            [name]: value
        });
    }
    
	handleSubmit = (event) => {
        let {username, password} = this.state;
		this.props.formLogin(username, password);
        event.preventDefault();
    }

    render() {
        return (
            <div className="row">
                <div className="box">
                    <div className="col-lg-12">
                        <hr />
                            <h2 className="intro-text text-center">Login <strong>form</strong></h2>
                        <hr />
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <label>Name</label>
                                    <input name="username" value={this.state.username} onChange={this.handleChange}  type="text" className="form-control" />
                                </div>
                                <div className="form-group col-lg-6">
                                    <label>Password</label>
                                    <input name="password" value={this.state.password} onChange={this.handleChange} type="text" className="form-control" />
                                </div>

                                <div className="clearfix" />
                                <div className="form-group col-lg-12">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        formLogin: (username, password) => {
            dispatch(actLogin(username, password)) ;
        }
    }
}
export default connect(null, mapDispatchToProps)(FormLogin);
