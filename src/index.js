import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, withRouter, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

import App from "./components/App";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import AddProduct from "./components/AddProduct";
import OrderList from "./components/OrderList";

import SignInForm from "./components/auth/SignInForm";
import SignUpForm from "./components/auth/SignUpForm";
import SignOut from "./components/auth/SignOut";

import { isLogin, isAdmin } from "./actions/helpers";

const user = JSON.parse(localStorage.getItem("user")) || {};

const defaultState = {
	auth: {
		isLogin: isLogin(user.token),
		isAdmin: isAdmin(user.roles),
		userName: user.username,
		token: user.token
	}
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App>
				<Switch>
					<Route path="/" exact component={ Home }/>
					<Route path="/signin" component={ withRouter(SignInForm) }/>
					<Route path="/signup" component={ withRouter(SignUpForm) }/>
					<Route path="/cart" component={ Cart }/>
					<Route path="/signout" component={ SignOut }/>
					<Route path="/addbook" component={ withRouter(AddProduct) }/>
					<Route path="/orderlist" component={ OrderList }/>
					<Route component={ NotFound }/>
				</Switch>
			</App>
		</BrowserRouter>
	</Provider>,
	document.querySelector("#root")
);
