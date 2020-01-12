import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import Menu from './Menu'
import Title from './Title'
import Home from './Home'
import About from './About'
import Notfound from './Notfound';

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
                                    <Switch>
                                        <Route exact path="/" component={ Home } />
                                        <Route exact path="/about" component={ About } />
                                        <Route component={ Notfound } />
                                    </Switch>
                                </div>  
                            </div>  
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
