import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleDelete = this.handleEdit.bind(this);
    }

    handleEdit(item){
        this.props.onClickEdit(item);
    }

    handleDelete(id){
        this.props.onClickDelete(id);
    }

    render() {
        const { item, index } = this.props;

        return (
            <tr>
                <td className="text-center"> { index+1 } </td>
                <td>{ item.name }</td>
                <td className="text-center">{ this.showElementLevel(item.level) }</td>
                <td>
                    <button onClick={()=>this.handleEdit(item)} type="button" className="btn btn-warning">Edit</button>
                    <button onClick={()=>this.handleDelete(item.id)} type="button" className="btn btn-danger">Delete</button>
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
