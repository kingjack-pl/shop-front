import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, withRouter, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

import App from "./components/App";
import Home from "./components/Home";
import SecretPage from "./components/SecretPage";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

import SignInForm from "./components/auth/SignInForm";
import SignUpForm from "./components/auth/SignUpForm";
import SignOut from "./components/auth/SignOut";
import AddBook from "./components/AddBook"
const defaultState = {
	auth: {
		isLogin: localStorage.getItem("token")
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
					<Route path="/secret" component={ SecretPage }/>
					<Route path="/cart" component={ Cart }/>
					<Route path="/signout" component={ SignOut }/>
					<Route path="/AddBook" component={ AddBook }/>
					<Route component={ NotFound }/>
				</Switch>
			</App>
		</BrowserRouter>
	</Provider>,
	document.querySelector("#root")
);
