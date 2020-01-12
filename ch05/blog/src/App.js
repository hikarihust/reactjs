import React from 'react';

function App() {
  return (
    <div className="App">
        <div className="brand">Business Casual</div>
        <div className="address-bar">The Plaza | 5483 Start Bootstrap Ave. | Beverly Hills, California 26892 | 555.519.2013</div>
        <nav className="navbar navbar-default" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="index.html">Business Casual</a>
                </div>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="index.html">Home</a>
                        </li>
                        <li><a href="about.html">About</a>
                        </li>
                        <li><a href="blog.html">Blog</a>
                        </li>
                        <li><a href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
                {/* /.navbar-collapse */}
            </div>
            {/* /.container */}
        </nav>
        <div className="container">
            <div className="row">
                <div className="box">
                    <div className="col-lg-12 text-center">
                        <div id="carousel-example-generic" className="carousel slide">
                            {/* Indicators */}
                            <ol className="carousel-indicators hidden-xs">
                                <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
                                <li data-target="#carousel-example-generic" data-slide-to={1} />
                                <li data-target="#carousel-example-generic" data-slide-to={2} />
                            </ol>
                            {/* Wrapper for slides */}
                            <div className="carousel-inner">
                                <div className="item active">
                                    <img className="img-responsive img-full" src="img/slide-1.jpg" alt="" />
                                </div>
                                <div className="item">
                                    <img className="img-responsive img-full" src="img/slide-2.jpg" alt="" />
                                </div>
                                <div className="item">
                                    <img className="img-responsive img-full" src="img/slide-3.jpg" alt="" />
                                </div>
                            </div>
                            {/* Controls */}
                            <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                            <span className="icon-prev" />
                            </a>
                            <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                            <span className="icon-next" />
                            </a>
                        </div>
                        <h2>
                            <small>Welcome to</small>
                        </h2>
                        <h1>
                            <span className="brand-name">Business Casual</span>
                        </h1>
                        <hr className="tagline-divider" />
                        <h2>
                            <small>By <strong>Start Bootstrap</strong></small>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <div className="col-lg-12">
                        <hr />
                        <h2 className="intro-text text-center">Build a website <strong>worth visiting</strong>
                        </h2>
                        <hr />
                        <img className="img-responsive img-border img-left" src="img/intro-pic.jpg" alt="" />
                        <hr className="visible-xs" />
                        <p>The boxes used in this template are nested inbetween a normal Bootstrap row and the start of your column layout. The boxes will be full-width boxes, so if you want to make them smaller then you will need to customize.</p>
                        <p>A huge thanks to <a href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for allowing us to use the beautiful photos that make this template really come to life. When using this template, make sure your photos are decent. Also make sure that the file size on your photos is kept to a minumum to keep load times to a minimum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat diam quis nisl vestibulum dignissim. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <div className="col-lg-12">
                        <hr />
                        <h2 className="intro-text text-center">Beautiful boxes <strong>to showcase your content</strong>
                        </h2>
                        <hr />
                        <p>Use as many boxes as you like, and put anything you want in them! They are great for just about anything, the sky's the limit!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat diam quis nisl vestibulum dignissim. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* /.container */}
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p>Copyright © Company 2013</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
