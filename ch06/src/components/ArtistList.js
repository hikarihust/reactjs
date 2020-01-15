import React, { Component } from 'react';
import {connect} from 'react-redux';

import SpotifyFetch from './../services/SpotifyFetch';
import Artist from './Artist';

class ArtistList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            isExist: false,
        };
    }

    searchArtist(query) {
        if (query) {
            SpotifyFetch.getArtists(query).then((data) => {
                if (data && data.artists.items) {
                    this.setState({
                        artists: data.artists.items
                    });
                }
            });
        } else {
            this.setState({
                artists: []
            });
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.searchArtist(nextProps.query);
    }

    render() {
        let { artists } = this.state;
        let {query} = this.props;

        let xhtml = <h3>Enter artist's name to start</h3>

        if(artists.length > 0){
            xhtml = artists.map((artist, index)=> {
                return (
                    <Artist key={index} item={artist} index={index} />
                );
            });
        } else if(query) {
            xhtml = <h3>Không có dữ liệu cho <strong>{query}</strong></h3>
        }

        return (
            <div className="panel-body" >
                { xhtml }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        query: state.query
    }
}

export default connect(mapStateToProps, null)(ArtistList);
