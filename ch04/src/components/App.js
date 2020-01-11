import React from 'react';
import Title from './Title';
import ProductsContainer from './../containers/ProductsContainer';
import Cart from './Cart';

function App() {
  return (
    <div className="container">
        <Title />
        <div className="row">
            <ProductsContainer />
            <Cart />
        </div>
    </div>

  );
}

export default App;
