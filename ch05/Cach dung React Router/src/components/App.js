import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import Menu from './Menu'
import Title from './Title'

import routes from './../route-config'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Title />
                    <div className="row">
                        <Menu />
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <div className="panel panel-danger">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Content</h3>
                                </div>  
                                <div className="panel-body">
                                    { this.showRoute(routes) }
                                </div>  
                            </div>  
                        </div>
                    </div>
                </div>
            </Router>
        );
    }

    showRoute(routes) {
        let xhtml = null;

        if (routes.length > 0) {
            xhtml = routes.map((route, index) => {  
                return (
                    <Route key={ index } exact={route.exact} path={ route.path } component={ route.main } />
                );
            });
        }

        return <Switch>{ xhtml }</Switch>;
    }
}

export default App;
