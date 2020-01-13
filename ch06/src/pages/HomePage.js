import React, { Component } from 'react';
import FormSearch from '../components/FormSearch';
import ArtistList from '../components/ArtistList';

class HomePage extends Component {
    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <FormSearch />
                </div>
                <div className="panel-body">
                    <ArtistList />
                </div>
            </div>
        );
    }
}

export default HomePage;
