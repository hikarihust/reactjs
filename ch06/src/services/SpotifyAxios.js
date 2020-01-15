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

    static handleError(error){
        console.log(error);
    }

}