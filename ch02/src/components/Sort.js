import React, { Component } from 'react';

class Sort extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };

        this.handleSort = this.handleSort.bind(this);
    }

    handleSort(orderBy, orderDir){
        console.log("handleSort: ", orderBy + "-" + orderDir);
        this.props.onClickSort(orderBy, orderDir );
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
                        <li><a onClick={()=>this.handleSort('name', 'asc')} role="button">Name ASC</a></li>
                        <li><a onClick={()=>this.handleSort('name', 'desc')} role="button">Name DESC</a></li>
                        <li role="separator" className="divider" />
                        <li><a onClick={()=>this.handleSort('level', 'asc')} role="button">Level ASC</a></li>
                        <li><a onClick={()=>this.handleSort('level', 'desc')} role="button">Level DESC</a></li>
                    </ul>
                    <span className="badge badge-success badge-medium"> { strSort } </span>
                </div>
                </div>
            </div>
        );
    }
}

export default Sort;
