import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";

import CourseItem from './CourseItem'
class CourseList extends Component {
    render() {
        let { match } = this.props;
        console.log(match);
        return (
            <div>
				<h3>CourseList</h3>                
                <div className="list-group">
                    <NavLink exact to={`${match.url}/angular`} activeClassName="active" className="list-group-item">Angular</NavLink>
                    <NavLink exact to={`${match.url}/reactjs`} activeClassName="active" className="list-group-item">ReactJs</NavLink>
                    <NavLink exact to={`${match.url}/nodejs`} activeClassName="active" className="list-group-item">NodeJs</NavLink>
                </div>
                <Route exact path={match.url} render={()=> (
                    <h3>Please select a course</h3>
                )} />
                <Route path={`${match.url}/:cname`} component={ CourseItem } />
            </div>
        );
    }
}

export default CourseList;
