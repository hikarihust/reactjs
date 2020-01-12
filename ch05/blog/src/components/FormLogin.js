import React, { Component } from 'react';

class FormLogin extends Component {
    render() {
        return (
            <div className="row">
                <div className="box">
                    <div className="col-lg-12">
                        <hr />
                            <h2 className="intro-text text-center">Login <strong>form</strong></h2>
                        <hr />
                        <form role="form">
                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <label>Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group col-lg-6">
                                    <label>Password</label>
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormLogin;
