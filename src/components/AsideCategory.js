import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return (
        <div className="col-lg-3">
            <h5 className="mt-5">Category</h5>
            <div className="list-group">
                <Link to="#" className="list-group-item">Category 1</Link>
                <Link to="#" className="list-group-item">Category 2</Link>
                <Link to="#" className="list-group-item">Category 3</Link>
            </div>
        </div>
    )
};
