import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../actions";

// import Order from "./Order";

class OrderList extends Component {
    componentDidMount() {
        this.props.fetchOrders();
        this.shouldNavigateAway();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.shouldNavigateAway();
    }

    shouldNavigateAway = () => {
        if(!this.props.arrOrdersList.length) {
            this.props.history.push("/");
        }
    };
    render() {

        // const renderOrdersList = () => {
        //     return this.props.arrOrdersList.map( order => <Order key={order.id} data={order} /> )
        // };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 my-5">
                        <h5>My orders:</h5>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ orders: { arrOrdersList } }) => ({
    arrOrdersList
});

export default connect(mapStateToProps, { fetchOrders })(OrderList);
