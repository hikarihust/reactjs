import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    
    render() {
        return (
            <div className="col-12 col-lg-6">
                <div className="row">
                    <Sort />
                    <Search />
                </div>
            </div>
        );
    }
}

export default Control;
