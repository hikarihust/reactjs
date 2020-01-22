import React, { Component } from 'react';
import {useRouteMatch, Link} from 'react-router-dom';

const menus = [
    {to: '/task', exact: true, name: 'Task'},
    {to: '/user', exact: true, name: 'User'},
    {to: '/signin', exact: true, name: 'Signin'},
    {to: '/signup', exact: true, name: 'Signup'}
];

const MenuLink = ({ menu }) => {
    let match = useRouteMatch({
        path: menu.to,
        exact: menu.exact
    });
  
    return (
        <li className={match ? "active" : ""}>
            <Link to={ menu.to }>{menu.name}</Link>
        </li>
    );
}
class Menu extends Component {

    render() {
        return (
            <div className="list-group">
                { this.showMenus() }
            </div>     
        );
    }
    
	showMenus(){
        let xhtml = null;
        
        if (menus.length > 0) {
            xhtml = menus.map((menu, index) => {  
                return (
                    <MenuLink menu={ menu } key={ index } />
                );
            });
        }

        return xhtml;
    }
}

export default Menu;