import React, { Component } from 'react';

import NewsItem from './../components/NewsItem';
import BlogItem from './../components/BlogItem';

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
