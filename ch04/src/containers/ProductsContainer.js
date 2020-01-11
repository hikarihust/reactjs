import React from 'react';
import { connect } from 'react-redux';

import ProductList from './../components/ProductList';

const ProductsContainer = ({ products }) => (
    <ProductList products={ products }></ProductList>
)

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductsContainer);