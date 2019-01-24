// import axios from "axios";
// import { API_URL } from "../Config";

import data from "./data";

import { AUTH_USER, AUTH_ERR, FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART } from "./types";

export const signIn = (formData, callback) => async dispatch => {
	try {
		// const response = await axios.post(
		// 	`${API_URL}auth/signin`,
		// 	formData
		// );
		let response = {
			data: {
				token: true
			}
		};

		dispatch({
			type: AUTH_USER,
			payload: response.data
		});

		localStorage.setItem("token", response.data.token);

		setTimeout(() => {
			callback();
		}, 2000);
	} catch (e) {
		dispatch({
			type: AUTH_ERR,
			payload: "Error: Connection Error with API Endpoint"
		});
	}
};

export const signUp = (formData, callback) => async dispatch => {
	try {
		// const response = await axios.post(
		// 	`${API_URL}auth/signup`,
		// 	formData
		// );
		let response = {
			data: {
				token: true
			}
		};

		dispatch({
			type: AUTH_USER,
			payload: response.data.token
		});

		localStorage.setItem("token", response.data.token);

		setTimeout(() => {
			callback();
		}, 2000);
	} catch (e) {
		dispatch({
			type: AUTH_ERR,
			payload: "Error: Connection Error with API Endpoint or there is no such user"
		});
	}
};

export const signOut = callback => {
	localStorage.removeItem("token");

	callback();

	return {
		type: AUTH_USER,
		payload: false
	};
};

export const fetchProducts = () => ({
	type: FETCH_PRODUCTS,
	payload: data
});

export const addToCart = id => ({
	type: ADD_TO_CART,
	payload: id
});

export const removeFromCart = id => ({
	type: REMOVE_FROM_CART,
	payload: id
});

export const removeAllFromCart = () => ({
	type: REMOVE_ALL_FROM_CART
});
