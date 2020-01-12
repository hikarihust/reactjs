import React, { Component } from 'react';

import Header from './Header';
import Navigation from './Navigation';
import Slider from './Slider';
import NewsItem from './NewsItem';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navigation />
                <div className="container">
                    <Slider />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                </div>
                <Footer />
            </div>
          ); 
    }

}

export default App;
