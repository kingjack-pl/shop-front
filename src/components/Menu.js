import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Menu extends Component {
    render() {
        const { isLogin, isAdmin, userName, arrCartItemsId } = this.props;
        const cartQuantity = arrCartItemsId.length;

        const renderSignInAndSignUp = () => {
            if(isLogin) {
                return null
            }
            return (
                <Fragment>
                    <li className="nav-item"><Link className="nav-link" to="/signin">Sign In</Link></li>
                    <span className="nav-link">or</span>
                    <li className="nav-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>
                </Fragment>
            )
        };

        const renderDropdownMenu = () => {
            if(isLogin) {
                return (
                    <div className="dropdown-menu" aria-labelledby="dropdown05">
                        {isAdmin ? <Link className="dropdown-item" to="/AddBook">AddBook</Link> : null}
                        <Link className="dropdown-item" to="/cart">My order</Link>
                        <Link className="dropdown-item" to="/signout">Sign Out</Link>
                    </div>
                )
            }
        };

        const renderRightLinks = () => {
            return (
                <ul id="navbarNavDropdown" className="navbar-nav flex-row ml-md-auto">
                    {cartQuantity ? <li>
                        <Link className="nav-link" to="/cart">Cart&nbsp;
                            <span className="rounded-circle bg-danger text-white">&nbsp;{cartQuantity}&nbsp;</span>
                        </Link>
                    </li> : null}
                    <li className="nav-item dropdown">
                        <span className={`nav-link ${isLogin ? "dropdown-toggle" : ""}`} id="dropdown05"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hello {userName}</span>
                        {renderDropdownMenu()}
                    </li>
                    {renderSignInAndSignUp()}
                </ul>
            )
        };

        return (
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/secret">Secret Page</Link>
                    </li>
                </ul>
                {renderRightLinks()}
            </div>
        );
    }
}

const mapStateToProps = ({ auth: { isLogin, isAdmin, userName }, products: { arrCartItemsId } }) => ({
    isLogin,
    isAdmin,
    userName,
    arrCartItemsId
});

export default connect(mapStateToProps)(Menu);
