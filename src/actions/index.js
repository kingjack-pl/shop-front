import axios from "axios";
import { API_URL } from "../Config";

import data from "./data";

import { ADD_ERROR, ADD_SUCCESS, AUTH_USER, AUTH_ERR, FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART, FETCH_ORDERS } from "./types";

export const signIn = (formData, callback) => async dispatch => {
	try {
		// const response = await axios.post(
		// 	`${API_URL}auth/signin`,
		// 	formData
		// );
		let response = {
			data: {
				token: true,
				admin: true
			}
		};
		dispatch({
			type: AUTH_USER,
			payload: response.data
		});
		localStorage.setItem("token", response.data.token);
		localStorage.setItem("admin", response.data.admin);
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
	localStorage.removeItem("admin");
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

export const addProduct = formData => async dispatch => {
	try {
		let token = localStorage.getItem("token");
		await axios.post(`${API_URL}products/addauth`,
			formData, {headers:{"Authorization" : "Bearer " + token}});
		dispatch({
			type: ADD_SUCCESS,
			payload: "The product has been added successfully!"
		});
	} catch (e) {
		dispatch({
			type: ADD_ERROR,
			payload: e.message
		});
	}
};

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

export const fetchOrders = arrCartItems => ({
	type: FETCH_ORDERS,
	payload: arrCartItems
});
