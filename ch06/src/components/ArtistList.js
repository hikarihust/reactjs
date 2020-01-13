import React, { Component } from 'react';
import Artist from './Artist';

class ArtistList extends Component {
    render() {
        let xhtml = <h3>Enter artist's name to start</h3>

        return (
            <Artist />
        );
    }
}

export default ArtistList;
