import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };
    }

    render() {
        return (
            <div className="col-12">
                <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-append">
                    <button className="btn btn-info" type="button">Clear!</button>
                </span>
                </div>
            </div>
        );
    }
}

export default Search;
