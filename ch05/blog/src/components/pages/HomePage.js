import React, { Component } from 'react';

import Slider from './Slider';
import NewsItem from './NewsItem';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Slider />
                <NewsItem />
            </div>
        );
    }
}

export default HomePage;
