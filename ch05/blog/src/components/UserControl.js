import React, { Component } from 'react';

class UserControl extends Component {
    render() {
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
                                    <label>Hello:<strong>Quang</strong></label>
                                </div>
                                <div className="form-group col-lg-12">
                                    <button type="button" className="btn btn-primary">Logout</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserControl;
