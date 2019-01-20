import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Menu extends Component {
    renderLinks() {
        if (this.props.isLogin) {
            return (
                <Fragment>
                    <li className="nav-item"><Link className="nav-link" to="/signout">Sign Out</Link></li>
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <li className="nav-item"><Link className="nav-link" to="/signin">Sign In</Link></li>
                </Fragment>
            )
        }
    }

    render() {
        return (
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/secret">Secret Page</Link></li>
                    {this.renderLinks()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ auth: { isLogin } }) => ({
    isLogin
});

export default connect(mapStateToProps)(Menu);
