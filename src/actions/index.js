import axios from "axios";
import { API_URL } from "../Config";
import { ADD_ERROR, ADD_SUCCESS, AUTH_USER_REQUEST, AUTH_USER, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS, REMOVE_PRODUCTS, FETCH_ORDERS, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART } from "./types";

const authUser = token => {
	return axios.post(`${API_URL}me`,null, {headers:{"Authorization" : "Bearer " + token}});
};

export const signIn = (formData, callback) => async dispatch => {
	try {
		dispatch({
			type: AUTH_USER_REQUEST
		});
		const responseSignIn = await axios.post(
			`${API_URL}auth/signin`,
			formData
		);
		const responseAuth = await authUser(responseSignIn.data.token);
		const response = Object.assign(responseSignIn.data, responseAuth.data);
		dispatch({
			type: AUTH_USER,
			payload: response
		});
		localStorage.setItem("user", JSON.stringify(response));
		callback();
	} catch (e) {
		dispatch({
			type: ADD_ERROR,
			payload: "Error: Login failed!"
		});
	}
};

export const signUp = (formData, callback) => async dispatch => {
	try {
		dispatch({
			type: AUTH_USER_REQUEST
		});
		const responseSignUp = await axios.post(
			`${API_URL}auth/signup`,
			formData
		);
		const responseAuth = await authUser(responseSignUp.data.token);
		const response = Object.assign(responseSignUp.data, responseAuth.data);
		dispatch({
			type: AUTH_USER,
			payload: response
		});
		localStorage.setItem("user", JSON.stringify(response));
		callback();
	} catch (e) {
		dispatch({
			type: ADD_ERROR,
			payload: "Error: Connection Error with API Endpoint or there is no such user"
		});
	}
};

export const signOut = callback => {
	localStorage.removeItem("user");
	callback();
	return {
		type: AUTH_USER,
		payload: false
	};
};

export const fetchProducts = () => async dispatch => {
	try {
		dispatch({
			type: FETCH_PRODUCTS_REQUEST
		});
		const response = await axios.get(
			`${API_URL}products/all`
		);
		dispatch({
			type: FETCH_PRODUCTS,
			payload: response.data
		});
	} catch (e) {
		dispatch({
			type: ADD_ERROR,
			payload: e.message
		});
	}
};

export const addProduct = formData => async (dispatch, getState) => {
	try {
		const state = getState();
		const token = state.auth.token;
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

export const updateProduct = (id, formData) => async (dispatch, getState) => {
	try {
		const state = getState();
		const token = state.auth.token;
		await axios.put(`${API_URL}products/${id}`, formData, {headers:{"Authorization" : "Bearer " + token}});
		dispatch({
			type: ADD_SUCCESS,
			payload: "The product has been updated successfully!"
		});
	} catch (e) {
		dispatch({
			type: ADD_ERROR,
			payload: e.message
		});
	}
};

export const removeProduct = id => async (dispatch, getState) => {
	try {
		const state = getState();
		const token = state.auth.token;
		dispatch({
			type: REMOVE_PRODUCTS,
			payload: id
		});
		await axios.delete(`${API_URL}products/${id}`, {headers:{"Authorization" : "Bearer " + token}});
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

export const fetchOrders = () => async dispatch => {
	try {
		const response = await axios.get(
			`${API_URL}orders/all`
		);
		dispatch({
			type: FETCH_ORDERS,
			payload: response.data
		});
	} catch (e) {
		dispatch({
			type: ADD_ERROR,
			payload: e.message
		});
	}
};

export const addOrder = arrCartItems => async (dispatch, getState) => {
	try {
		const state = getState();
		const token = state.auth.token;
		await axios.post(`${API_URL}orders/addauth`,
			arrCartItems, {headers:{"Authorization" : "Bearer " + token}});
		dispatch({
			type: ADD_SUCCESS,
			payload: "The order has been sent!"
		});
	} catch (e) {
		dispatch({
			type: ADD_ERROR,
			payload: e.message
		});
	}
};
