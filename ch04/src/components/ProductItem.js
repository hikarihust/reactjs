import React, { Component } from 'react';

class ProductItem extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="media product">
                <div className="media-left">
                    <a href="http://localhost:3000/">
                        <img className="media-object" src="images/aplusautomation.jpg" alt="charmander" />
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">aplusautomation</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!</p>
                    <input name="quantity-product-1" type="number" defaultValue={1} min={1} />
                    <a data-product={1} type="button" className="price"> 12 USD </a>
                </div>
            </div>
        );
    }
}

export default ProductItem;