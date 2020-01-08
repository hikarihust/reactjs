import React from 'react';
import './App.css';
import Title from './components/Title';
import ProductList from './components/ProductList';
import Notify from './components/Notify';
import Cart from './components/Cart';

function App() {
  return (
    <div className="container">
        <Title />
        <div className="row">
            <ProductList />
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <Cart />
                <Notify />
            </div>
        </div>
    </div>

  );
}

export default App;
