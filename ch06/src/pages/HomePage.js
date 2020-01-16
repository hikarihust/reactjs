import React, { Component } from 'react';
import {connect} from 'react-redux';

import FormSearch from '../components/FormSearch';
import ArtistList from '../components/ArtistList';
import {actGoHome} from './../actions/index';

class HomePage extends Component {

	componentDidMount(){
		this.props.changeBreadcrumb();
	}

    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <FormSearch />
                </div>
                <div className="panel-body">
                    <ArtistList />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeBreadcrumb: () => {
            dispatch(actGoHome()) ;
        }
    }
}
export default connect(null, mapDispatchToProps)(HomePage);
