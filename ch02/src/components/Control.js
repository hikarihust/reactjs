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
        let { orderBy, orderDir } = this.props;
        return (
            <div className="col-12 col-lg-6">
                <div className="row">
                    <Sort 
                        onClickSort={ this.props.onClickSort }
                        orderBy={ orderBy } 
                        orderDir={ orderDir } 
                    />
                    <Search onClickGo={this.props.onClickSearchGo} />
                </div>
            </div>
        );
    }
}

export default Control;
