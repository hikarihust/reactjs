import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
        <div className="page-header">
            <h1>Project 02 - Shopping Cart <small>VueJS + VueX</small></h1>
        </div>

        <div className="row">
            {/* LIST PRODUCT : START */}
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
            <div className="panel panel-primary"> 
                <div className="panel-heading"><h1 className="panel-title">List Products</h1></div> 
                <div className="panel-body" id="list-product">
                {/* PRODUCT : START */}
                <div className="media product">
                    <div className="media-left">
                    <a href="#">
                        <img className="media-object" src="images/aplusautomation.jpg" alt="charmander" />
                    </a>
                    </div>
                    <div className="media-body">
                    <h4 className="media-heading">aplusautomation</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!</p>
                    <input name="quantity-product-1" type="number" defaultValue={1} min={1} />
                    <a data-product={1} href="#" className="price"> 12 USD </a>
                    </div>
                </div>
                {/* PRODUCT : END */}
                {/* PRODUCT : START */}
                <div className="media product">
                    <div className="media-left">
                    <a href="#">
                        <img className="media-object" src="images/aplus-media.jpg" alt="charmander" />
                    </a>
                    </div>
                    <div className="media-body">
                    <h4 className="media-heading">aplus media</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!</p>
                    <span className="price"> 12 USD</span>
                    </div>
                </div>
                {/* PRODUCT : END */}
                {/* PRODUCT : START */}
                <div className="media product">
                    <div className="media-left">
                    <a href="#">
                        <img className="media-object" src="images/robo_fig_combo.jpg" alt="charmander" />
                    </a>
                    </div>
                    <div className="media-body">
                    <h4 className="media-heading">robo fig combo</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!</p>
                    <input name="quantity-product-1" type="number" defaultValue={1} min={1} />
                    <a data-product={1} href="#" className="price"> 12 USD </a>
                    </div>
                </div>
                {/* PRODUCT : END */}
                {/* PRODUCT : START */}
                <div className="media product">
                    <div className="media-left">
                    <a href="#">
                        <img className="media-object" src="images/target-leap-frog.jpg" alt="target-leap-frog" />
                    </a>
                    </div>
                    <div className="media-body">
                    <h4 className="media-heading">target leap frog</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!</p>
                    <input name="quantity-product-1" type="number" defaultValue={1} min={1} />
                    <a data-product={1} href="#" className="price"> 12 USD </a>
                    </div>
                </div>
                {/* PRODUCT : END */}
                </div>
            </div>
            </div>
            {/* LIST PRODUCT : END */}
            {/* CART : START */}
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
            <div className="panel panel-info"> 
                <div className="panel-heading"><h1 className="panel-title">Your Cart</h1></div> 
                <div className="panel-body">
                <table className="table">
                    <thead>
                    <tr>
                        <th width="4%">#</th>
                        <th>Pokemon</th>
                        <th width="15%">Price</th>
                        <th width="4%">Quantity</th>
                        <th width="20%">Subtotal</th>
                        <th width="25%">Action</th>
                    </tr>
                    </thead>
                    <tbody id="my-cart-body">
                    {/* CART BODY */}
                    <tr>
                        <th scope="row">1</th>
                        <td>Lorem ipsum.</td>
                        <td>12 USD</td>
                        <td><input name="cart-item-quantity-1" type="number" defaultValue={1} min={1} /></td>
                        <td><strong>12 USD</strong></td>
                        <td>
                        <a className="label label-info update-cart-item" href="#" data-product>Update</a>
                        <a className="label label-danger delete-cart-item" href="#" data-product>Delete</a>
                        </td>
                    </tr>
                    </tbody>
                    <tfoot id="my-cart-footer">
                    {/* CART FOOTER */}
                    <tr><th colSpan={6}>Empty product in your cart</th></tr>
                    <tr>
                        <td colSpan={4}>There are <b>5</b> items in your shopping cart.</td>
                        <td colSpan={2} className="total-price text-left">12 USD</td>
                    </tr>
                    </tfoot>
                </table>
                </div>
            </div>
            <div className="alert alert-success" role="alert" id="mnotification">Updated <b>ivysaur</b></div>
            </div>
            {/* CART : END */}
        </div>
    </div>

  );
}

export default App;
