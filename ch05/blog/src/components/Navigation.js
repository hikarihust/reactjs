import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

const menus = [
    { to: '/'       , exact: true, name: 'Home' },
    { to: '/about'  , exact: true, name: 'About' },
    { to: '/blog'  , exact: false, name: 'Blog' },
    { to: '/login'  , exact: true, name: 'Login' }
];

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        </button>
                        <NavLink className="navbar-brand" to='/'>
                            Business Casual
                        </NavLink>
                    </div>
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            { this.showMenus(menus) }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

    showMenus(menus) {
        let xhtml = null;
        
        if (menus.length > 0) {
            xhtml = menus.map((menu, index) => {  
                return (
                    <li key={ index }>
                        <NavLink exact={ menu.exact } to={ menu.to } activeClassName="active">
                            { menu.name }
                        </NavLink>
                    </li>
                );
            });
        }

        return xhtml;
    } 
}

export default Navigation;
