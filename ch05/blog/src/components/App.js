import React, { Component } from 'react';

import Header from './Header';
import Navigation from './Navigation';
import Slider from './Slider';
import NewsItem from './NewsItem';
import Footer from './Footer';
import BlogItem from './BlogItem';
import FormLogin from './FormLogin';
import UserControl from './UserControl';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navigation />
                <div className="container">
                    <UserControl />
                </div>
                <Footer />
            </div>
          ); 
    }

}

export default App;
