import React, { Component } from 'react';
import {connect} from 'react-redux';

import Artist from './Artist';

class ArtistList extends Component {
    render() {
        console.log(this.props.query);
        let xhtml = <h3>Enter artist's name to start</h3>

        return (
            <Artist />
        );
    }
}

const mapStateToProps = state => {
    return {
        query: state.query
    }
}

export default connect(mapStateToProps, null)(ArtistList);
