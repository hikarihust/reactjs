import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    
    render() {
        let { orderBy, orderDir } = this.props;
        return (
            <div className="col-12 col-lg-6">
                <div className="row">
                    <Sort 
                        onClickSort={ this.props.onClickSort }
                        orderBy={ orderBy } 
                        orderDir={ orderDir } 
                    />
                    <Search />
                </div>
            </div>
        );
    }
}

export default Control;
