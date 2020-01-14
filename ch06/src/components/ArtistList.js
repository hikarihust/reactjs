import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as configs from './../constants/Config';
import Artist from './Artist';

class ArtistList extends Component {

    searchArtist(query) {
        if (query) {
            let url =  configs.BASE_URL + 'search?q=' + query + '&type=artist&limit=4&offset=0';
            console.log(url);
        }

        // fetch('http://example.com/movies.json')
        // .then((response) => {
        //   return response.json();
        // })
        // .then((myJson) => {
        //   console.log(myJson);
        // });
    }

    render() {
        this.searchArtist(this.props.query);

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
