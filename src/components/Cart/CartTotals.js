import React from 'react';
import { Link } from 'react-router-dom';
import Flutterwave from './Flutterwave';
// import PayPalButton from './PayPalButton';

export default function CartTotals({ value, history }) {
    const {
        cartSubTotal,
        cartTax,
        cartTotal,
        clearCart
    } = value;

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="card-body mx-auto col-10 my-5 pb-5 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-center">
                        <Link to="/">
                            <button 
                                className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                                type="button"
                                onClick={() => clearCart()}
                            >
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal :
                            </span>
                            <strong>
                                <small>$ {cartSubTotal}</small>
                            </strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax :
                            </span>
                            <strong>
                                <small>$ {cartTax}</small>
                            </strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                total :
                            </span>
                            <strong>
                                <small>$ {cartTotal}</small> 
                            </strong>
                        </h5>
                        {/* <PayPalButton 
                            total={cartTotal} 
                            clearCart={clearCart}
                            history={history}
                        /> */}
                        <Flutterwave />
                    </div>  
                </div> 
            </div>
        </React.Fragment>
    );
}
