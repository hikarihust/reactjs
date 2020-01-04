import React, { Component } from 'react';

class Sort extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };
    }

    render() {
        let { orderBy, orderDir } = this.props;
        let strSort = orderBy + " - " + orderDir;
 
        return (
            <div className="col-12">
                <div className="form-group">
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort by
                    </button>
                    {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> */}

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a role="button">Name ASC</a></li>
                        <li><a role="button">Name DESC</a></li>
                        <li role="separator" className="divider" />
                        <li><a role="button">Level ASC</a></li>
                        <li><a role="button">Level DESC</a></li>
                    </ul>
                    <span className="badge badge-success badge-medium"> { strSort } </span>
                </div>
                </div>
            </div>
        );
    }
}

export default Sort;
