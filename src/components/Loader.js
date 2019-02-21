import React, { Component } from "react";
import { PulseLoader } from "react-spinners";
import { connect } from "react-redux";
import { createLoadingSelector } from '../actions/selectors';

class Loader extends Component {
    render() {
        const { isLoading } = this.props;

        console.log(isLoading);

        if(!isLoading) {
            return null
        }

        return (
            <div className="sweetLoading">
                <PulseLoader
                    className="override"
                    sizeUnit={"px"}
                    size={15}
                    color={"#B22222"}
                    loading={isLoading}
                />
            </div>
        )
    }
}

const loadingSelector = createLoadingSelector(['fetch_products']);

const mapStateToProps = state => ({
    isLoading: loadingSelector(state)
});

export default connect(mapStateToProps)(Loader);


