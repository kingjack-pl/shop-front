import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchProducts } from "../actions";

import Product from "./Product";

class ProductList extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const { arrProductsList, arrCartItemsId, isAdmin } = this.props;

        const renderProductsList = () => {
            return arrProductsList.map( product => <Product key={product.id} data={product} isInCart={arrCartItemsId.includes(product.id)} isAdmin={isAdmin} /> )
        };

        return (
            <div className="col-lg-9 mt-5">
                <div className="row">
                    {renderProductsList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ products: { arrProductsList, arrCartItemsId }, auth: { isAdmin } }) => ({
    arrProductsList,
    arrCartItemsId,
    isAdmin
});

export default connect(mapStateToProps, { fetchProducts })(ProductList);
