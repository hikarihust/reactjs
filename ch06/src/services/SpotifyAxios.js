import axios from 'axios';

import * as configs from './../constants/Config';

const queryString = require('query-string');

export default class SpotifyAxios {
    static config = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + configs.API_KEY
        }
    };

    static getArtist(id){
        if (id) {
            let url=`${configs.BASE_URL}artists/${id}`;
            return axios.get(url, SpotifyAxios.config).catch(SpotifyAxios.handleError); 
        }
    }

    static getAlbums(artistID){
        let strParams = queryString.stringify({
            offset: 0,
            limit: 5
        });

        if (artistID) {
            let url=`${configs.BASE_URL}artists/${artistID}/albums?${strParams}`;
            return axios.get(url, SpotifyAxios.config).catch(SpotifyAxios.handleError); 
        }
    }

    static getAlbum(albumID){

        if (albumID) {
            let url=`${configs.BASE_URL}albums/${albumID}`;
            return axios.get(url, SpotifyAxios.config).catch(SpotifyAxios.handleError); 
        }
    }

    static handleError(error){
        console.log(error);
    }

}