import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };
    }

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
