import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as configs from './../constants/Config';
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
            let url =  configs.BASE_URL + 'search?q=' + query + '&type=artist&limit=4&offset=0';
            let config = {  
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + configs.API_KEY
                    }
                };
            fetch(url, config)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    if (data) {
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
