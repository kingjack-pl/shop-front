import React, { Component } from "react";
import { connect } from "react-redux";

import { addToCart, removeFromCart, removeProduct } from "../actions";

class Order extends Component {
    render() {
        const { data: { id, title, author, price, description, categories, photo }, isInCart, isAdmin, addToCart, removeFromCart, removeProduct } = this.props;

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
                    <img className="card-img-top" src={photo.includes("https://") ? photo : "https://placehold.it/700x400"} alt={title} />
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{"Author: " + author}</p>
                        <p className="card-text">{categories}</p>
                        <h5>{price} $</h5>
                        <p className="card-text">{description}</p>
                        {btnAddOrRemoveFromCart}
                        {isAdmin ? <button
                            className="btn btn-danger mt-1"
                            onClick={() => removeProduct(id) }
                        >
                            REMOVE BOOK
                        </button> : null }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { addToCart, removeFromCart, removeProduct })(Order);
