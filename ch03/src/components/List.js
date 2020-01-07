import React, { Component } from 'react';
import { connect } from 'react-redux'
import Item from './Item';
import { filter, includes } from 'lodash';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };

    }

    render() {
        let { items, search }   = this.props;
        // Search 
        let itemsOrigin = items ? [...items] : [];
        items = filter(itemsOrigin, (item) => {
            return includes(item.name.toLowerCase(), search.toLowerCase());
        });

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
        items: state.items,
        search: state.search
    }
}

export default connect(mapStateToProps, null)(List);
