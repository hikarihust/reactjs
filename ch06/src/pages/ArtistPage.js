import React, { Component } from 'react';

import SpotifyAxios from './../services/SpotifyAxios';
import Album from '../components/Album';

class ArtistPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			artist: null,
			albums: []
		};
	}

	UNSAFE_componentWillMount(){
        let { match } = this.props;
        let id = match.params.id;
        SpotifyAxios.getArtist(id).then((response) => { 
            if (response && response.data) {
                this.setState({
                    artist: response.data
                });
            }
        });
	}

    render() {

        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Singer</h3>
                </div>
                <div className="panel-body">
                    <div className="panel-body">
                        <div className="col-sm-4 col-md-4">
                            <img src="https://i.scdn.co/image/23b3caeb7f6d181787bd5bd04f5c0ddbc332dcab" alt="Thu Minh" className="img-rounded img-responsive" />
                            <blockquote style={{marginTop: '20px'}}>
                            <p>Thu Minh</p>
                            </blockquote>
                            <p><i className="glyphicon glyphicon-play-circle" /><a rel="noopener noreferrer" target="_blank" href="https://open.spotify.com/artist/4mzMFxVZNS2uCVNdsVFoj5"> View Spotify</a><br /><br /><i className="glyphicon glyphicon-play-circle" /> Genres:<span className="label label-warning" style={{marginRight: '5px'}}>vietnamese pop</span></p>
                        </div>
                        <div className="col-sm-8 col-md-8">
                            <div className="panel panel-danger">
                                <div className="panel-heading">
                                    <h3 className="panel-title">List Albums</h3>
                                </div>
                                <div className="panel-body list-albums">
                                    <Album />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArtistPage;
