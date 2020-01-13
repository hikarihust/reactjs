import React, { Component } from 'react';

import Slider from './Slider';
import NewsItem from './NewsItem';
import BlogItem from './BlogItem';

class AboutPage extends Component {
    render() {
        return (
            <div>
                <NewsItem />
                <BlogItem />
                <NewsItem />
            </div>
        );
    }
}

export default AboutPage;
