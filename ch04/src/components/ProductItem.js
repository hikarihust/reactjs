import React, { Component } from 'react';
import { connect } from 'react-redux'

import Helpers from './../libs/Helpers';
import Validate from './../libs/Validate';
import { actChangeNotify } from './../actions'
import * as configs from './../constants/Config';

class ProductItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 1
        };
    }

    handleChange = (event) => {
        const target = event.target;    // input selectbox
        const value  = (target.type === 'checkbox') ? target.checked : target.value;
        const name   = target.name;

        this.setState({
            [name]: value
        });
    }

    handleClick = (product) => {
        let quantity = +this.state.value;
        if (!Validate.checkQuantity(quantity)) {
            this.props.changeNotify(configs.NOTI_GREATER_THAN_ONE);
        } else {
            console.log(quantity + '-' + product.id);
            this.props.changeNotify(configs.NOTI_ACT_ADD);
        }
        this.setState({ value: 1 });
    }

    render() {
        let { product } = this.props; 
        return (
            <div className="media product">
                <div className="media-left">
                    <a href="http://localhost:3000/">
                        <img className="media-object" src={`images/${product.image}`} alt="{ product.name }" />
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{ product.name }</h4>
                    <p>{ product.summary }</p>
                    { this.showAreaBuy(product) }
                </div>
            </div>
        );
    }

    showAreaBuy(product){
        let xhtml = null;
        let price = Helpers.toCurrency(product.price, "$", "left");
        if (product.canBuy) {
            xhtml = <p>
                    <input name="value" type="number" value={ this.state.value } onChange={this.handleChange} min={1} />
                    <a onClick={()=>this.handleClick(product)} type="button" className="price"> 
                        { price }
                    </a>
                </p>
        } else {
            xhtml = <span className="price"> { price }</span>;
        }

        return xhtml;
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeNotify: (value) => {
            dispatch(actChangeNotify(value));
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductItem);