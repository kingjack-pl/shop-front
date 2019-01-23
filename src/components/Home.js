import React from "react";

import ProductList from "./ProductList";
import AsideCategory from "./AsideCategory";

export default () => {
    return (
        <div className="container">
            <div className="row">
                <AsideCategory/>
                <ProductList />
            </div>
        </div>
    )
};
