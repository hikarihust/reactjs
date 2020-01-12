import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="list-group">
                    <NavLink exact to="/" activeClassName="active" className="list-group-item">Home</NavLink>
                    <NavLink to="/about" activeClassName="active" className="list-group-item">About</NavLink>
                    <NavLink to="/course" activeClassName="active" className="list-group-item">Course</NavLink>
                </div>
            </div>
        );
    }
}

export default Menu;
