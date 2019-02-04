import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchProducts } from "../actions";

import Product from "./Product";

class ProductList extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const { arrProductsList, arrCartItemsId } = this.props;

        const renderProductsList = () => {
            return arrProductsList.map(product => {
                const id = arrProductsList.indexOf(product);
                return <Product key={id} data={product} isInCart={arrCartItemsId.includes(id)} id={id} />
            })
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

const mapStateToProps = ({ products: { arrProductsList, arrCartItemsId } }) => ({
    arrProductsList,
    arrCartItemsId
});

export default connect(mapStateToProps, { fetchProducts })(ProductList);
