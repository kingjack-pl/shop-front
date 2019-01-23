import React, { Component } from "react";
import { connect } from "react-redux";

import { addToCart, removeFromCart } from "../actions";

class Product extends Component {

    render() {
        const { data: { id, name, price, desc, cat, src }, isInCart, addToCart, removeFromCart } = this.props;

        let btnAddOrRemoveFromCart;

        if (isInCart) {
            btnAddOrRemoveFromCart = (
                <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(id)}
                >
                    REMOVE FROM CART
                </button>
            );
        } else {
            btnAddOrRemoveFromCart = (
                <button
                    className="btn btn-primary"
                    onClick={() => addToCart(id)}
                >
                    ADD TO CART
                </button>
            );
        }

        return (
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <img className="card-img-top" src={src} alt={name} />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{cat}</p>
                        <h5>{price} $</h5>
                        <p className="card-text">{desc}</p>
                        {btnAddOrRemoveFromCart}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { addToCart, removeFromCart })(Product);