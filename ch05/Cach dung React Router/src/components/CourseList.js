import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";

import CourseItem from './CourseItem'

const menuCourses = [
    { to: '/angular' , name: 'Angular' },
    { to: '/reactjs' , name: 'ReactJs' },
    { to: '/nodejs'  , name: 'NodeJs' },
];

class CourseList extends Component {
    render() {
        let { match } = this.props;

        return (
            <div>
				<h3>CourseList</h3>                
                <div className="list-group">
                    { this.showMenuCourses(match.url, menuCourses) }
                </div>
                <Route exact path={match.url} render={()=> (
                    <h3>Please select a course</h3>
                )} />
                <Route path={`${match.url}/:cname`} component={ CourseItem } />
            </div>
        );
    }

    showMenuCourses(url, menus) {
        let xhtml = null;
        
        if (menus.length > 0) {
            xhtml = menus.map((menu, index) => {  
                let urlCourse = url + menu.to;
                return (
                    <NavLink key={ index } exact to={ urlCourse } activeClassName="active" className="list-group-item">
                        {menu.name}
                    </NavLink>
                );
            });
        }

        return xhtml;
    } 
}

export default CourseList;
