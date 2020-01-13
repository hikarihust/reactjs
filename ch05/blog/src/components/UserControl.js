import React, { Component } from 'react';
import {actLogout} from './../actions/index';
import {connect} from 'react-redux';

class UserControl extends Component {
    handeLogout = () => {
        this.props.formLogout();
    }

    render() {
        let { username } = this.props;
        return (
            <div className="row">
                <div className="box">
                    <div className="col-lg-12">
                        <hr />
                            <h2 className="intro-text text-center"><strong>UserControl</strong></h2>
                        <hr />
                        <form role="form">
                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <label>Hello: <strong>{ username }</strong></label>
                                </div>
                                <div className="form-group col-lg-12">
                                    <button onClick={ this.handeLogout } type="button" className="btn btn-primary">Logout</button>
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
        formLogout: () => {
            dispatch(actLogout()) ;
        }
    }
}

export default connect(null, mapDispatchToProps)(UserControl);
