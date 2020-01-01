import React, { Component } from 'react';

class Sort extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };
    }

    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort by
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Name ASC</a>
                    <a className="dropdown-item" href="#">Name DESC</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Level ASC</a>
                    <a className="dropdown-item" href="#">Level DESC</a>
                    </div>
                    <span className="badge badge-success badge-medium">NAME - DESC</span>
                </div>
                </div>
            </div>
        );
    }
}

export default Sort;
