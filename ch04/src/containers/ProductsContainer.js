import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProductList from './../components/ProductList';

const ProductsContainer = ({ products }) => (
    <ProductList products={ products }></ProductList>
)

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        canBuy: PropTypes.bool.isRequired,
    })).isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductsContainer);