import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };

        // props.onClickEdit = App.handleEdit
    }

    render() {
        const { item, index } = this.props;

        return (
            <tr>
                <td className="text-center"> { index+1 } </td>
                <td>{ item.name }</td>
                <td className="text-center">{ this.showElementLevel(item.level) }</td>
                <td>
                    <button type="button" className="btn btn-warning">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }

    showElementLevel(level){
        let elemLevel = <span className="badge badge-secondary">Small</span>;
        if(level === 1) {
            elemLevel = <span className="badge badge-info">Medium</span>;
        } else if(level === 2) {
            elemLevel = <span className="badge badge-danger">High</span>;
        } 
        return elemLevel;
    }
}

export default Item;
