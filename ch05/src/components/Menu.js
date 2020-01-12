import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

const menus = [
    { to: '/'       , exact: true, name: 'Home' },
    { to: '/about'  , exact: true, name: 'About' },
    { to: '/course'  , exact: false, name: 'Course' },
];

class Menu extends Component {
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="list-group">
                    { this.showMenus(menus) }
                </div>
            </div>
        );
    }

    showMenus(menus) {
        let xhtml = null;
        
        if (menus.length > 0) {
            xhtml = menus.map((menu, index) => {  
                return (
                    <NavLink key={ index } exact={ menu.exact } to={ menu.to } activeClassName="active" className="list-group-item">
                        { menu.name }
                    </NavLink>
                );
            });
        }

        return xhtml;
    } 
}

export default Menu;
