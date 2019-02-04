import React, { Component } from "react";
import {connect} from "react-redux";
import { removeAllFromCart, addOrder } from "../actions";

import NotificationDisplay from "./NotificationDisplay";

class Cart extends Component {
    componentDidMount() {
        this.shouldNavigateAway();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.shouldNavigateAway();
    }

    shouldNavigateAway = () => {
        if(!this.props.arrCartItemsId.length) {
            this.props.history.push("/");
        }
    };

    render() {
        const { arrProductsList, arrCartItemsId, removeAllFromCart, addOrder } = this.props;
        const arrCartItems = arrCartItemsId.map( cartItemId => arrProductsList.find( product => arrProductsList.indexOf(product) === cartItemId ));
        const renderCartItems = arrCartItems.map( cartItem => <li key={arrCartItems.indexOf(cartItem)} className="list-group-item d-flex justify-content-between align-items-center">{cartItem.title}
        <span className="badge badge-primary badge-pill">{cartItem.price} $</span></li> );
        const totalCost = arrCartItems.reduce( (prev, curr) => prev + curr.price, 0 );
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 my-5">
                        <NotificationDisplay />
                        <h5>Cart Items</h5>
                        <div className="list-group">
                            {renderCartItems}
                        </div>
                        <h5 className="mt-3">Total Cost:</h5>
                        <p>{totalCost} $</p>
                        <button className="btn btn-danger" onClick={() => removeAllFromCart()}>REMOVE ALL FROM CART</button>
                        <button className="ml-3 btn btn-primary" onClick={() => addOrder(arrCartItems)}>ADD ORDER</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ products: { arrProductsList, arrCartItemsId } }) => ({
    arrProductsList,
    arrCartItemsId
});

export default connect(mapStateToProps, { removeAllFromCart, addOrder })(Cart);
