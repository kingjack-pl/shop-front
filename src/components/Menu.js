import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Menu extends Component {
    render() {
        const { isLogin, arrCartItemsId } = this.props;
        const cartQuantity = arrCartItemsId.length;

        const renderLinks = () => {
            if (isLogin) {
                return (
                    <Fragment>
                         <li className="nav-item"><Link className="nav-link" to="/signout">Sign Out</Link></li>
                         <li className="nav-item"><Link className="nav-link" to="/AddBook">AddBook</Link></li>
                    </Fragment>
                );
            } else {
                return (
                    <Fragment>
                        <li className="nav-item"><Link className="nav-link" to="/signin">Sign In</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>
                    </Fragment>
                )
            }
        };

        const renderCartQuantity = () => {
            if (cartQuantity) {
                return (
                    <ul className="navbar-nav flex-row ml-md-auto">
                        <li>
                            <Link className="nav-link" to="/cart">Cart&nbsp;
                                <span className="rounded-circle bg-danger text-white">&nbsp;{cartQuantity}&nbsp;</span>
                            </Link>
                        </li>
                    </ul>
                )
            }
        };

        return (
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/secret">Secret Page</Link>
                    </li>
                    {renderLinks()}
                </ul>
                {renderCartQuantity()}
            </div>
        );
    }
}

const mapStateToProps = ({ auth: { isLogin }, products: { arrCartItemsId } }) => ({
    isLogin,
    arrCartItemsId
});

export default connect(mapStateToProps)(Menu);
