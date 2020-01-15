import * as configs from './../constants/Config';

export default class SpotifyFetch {
    static config = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + configs.API_KEY
        }
    };

    static getArtists(query){
        if (query) {
            let url =  configs.BASE_URL + 'search?q=' + query + '&type=artist&limit=4&offset=0';

            return fetch(url, SpotifyFetch.config)
                .then((response) => response.json());
        }
    }

}