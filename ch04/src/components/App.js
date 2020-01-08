import React from 'react';
import Title from './Title';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  return (
    <div className="container">
        <Title />
        <div className="row">
            <ProductList />
            <Cart />
        </div>
    </div>

  );
}

export default App;
