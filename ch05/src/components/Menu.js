import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="list-group">
                    <a href="/" className="list-group-item active">Home</a>
                    <a href="/about" className="list-group-item">About</a>
                </div>
            </div>
        );
    }
}

export default Menu;
