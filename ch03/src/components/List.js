import React, { Component } from 'react';
import { connect } from 'react-redux'
import Item from './Item';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };

    }

    render() {
        const  { items }   = this.props;
        let elemItem = <tr><th colSpan={4}>Khong co cong viec</th></tr>;

        if(items.length > 0) {
            elemItem = items.map((item, index) => {
                return (
                    <Item 
                        key={index} item={item} index={ index } 
                        onClickEdit={ this.props.onClickEdit }
                        onClickDelete={ this.props.onClickDelete }
                    /> 
                );
            });
        }


        return (
            <div className="panel panel-success">
                <div className="panel-heading">List Task</div>
                <table className="table table-hover ">
                <thead>
                    <tr>
                    <th style={{width: '10%'}} className="text-center">#</th>
                    <th>Task</th>
                    <th style={{width: '20%'}} className="text-center">Level</th>
                    <th style={{width: '160px'}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { elemItem }
                </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, null)(List);