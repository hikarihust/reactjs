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
        let artist = {name: '', external_urls: '', genres: [], images: [{url: ''}]};
        artist	= this.state.artist || artist;
        console.log(artist);
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">{ artist.name }</h3>
                </div>
                <div className="panel-body">
                    <div className="panel-body">
                        <div className="col-sm-4 col-md-4">
                            { this.showImage(artist) }
                            <blockquote style={{marginTop: '20px'}}>
                            <p>{ artist.name }</p>
                            </blockquote>
                            <p>
                                <i className="glyphicon glyphicon-play-circle" /><a rel="noopener noreferrer" target="_blank" href={ artist.external_urls.spotify }> View Spotify</a><br /><br />
                                <i className="glyphicon glyphicon-play-circle" /> Genres:{ this.showGenres(artist.genres) }
                            </p>
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

    showImage(item){
        let xhtml     = null;
        if(item.images && item.images.length > 0 ){
            xhtml = <img src={ item.images[0].url } alt={ item.name } className="img-rounded img-responsive" />;
        }

        return xhtml;
    }

	showGenres(genres){
        let xhtml     = null;
        if(genres && genres.length > 0 ){
            xhtml = genres.map((genre, index)=> {
                return (
                    <span key={index} style={{ marginRight: 5 }} className="label label-warning">
                        {genre}
                    </span>
                );
            });
        }
        return xhtml;
	}
}

export default ArtistPage;
