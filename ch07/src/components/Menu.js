import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="list-group">
                <a className="list-group-item" aria-current="true" href="/task">Task</a>
                <a className="list-group-item" aria-current="false" href="/user">User</a>
                <a className="list-group-item" aria-current="false" href="/signin">Signin</a>
                <a className="list-group-item" aria-current="false" href="/signup">Signup</a>
            </div>     
        );
    }
}

export default Menu;
