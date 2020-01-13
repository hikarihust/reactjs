import React, { Component } from 'react';

import Slider from './Slider';
import NewsItem from './NewsItem';
import BlogItem from './BlogItem';

class BlogPage extends Component {
    render() {
        return (
            <div>
                <BlogItem />
                <NewsItem />
                <BlogItem />
            </div>
        );
    }
}

export default BlogPage;
