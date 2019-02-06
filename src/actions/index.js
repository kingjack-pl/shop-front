import axios from "axios";
import { API_URL } from "../Config";
import { ADD_ERROR, ADD_SUCCESS, AUTH_USER, FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART } from "./types";

const authUser = token => {
	return axios.post(`${API_URL}me`,null, {headers:{"Authorization" : "Bearer " + token}});
};

export const signIn = (formData, callback) => async dispatch => {
	try {
		const responseSignIn = await axios.post(
			`${API_URL}auth/signin`,
			formData
		);
		const responseAuth = await authUser(responseSignIn.data.token);
		const response = Object.assign(responseSignIn.data, responseAuth.data);
		localStorage.setItem("user", JSON.stringify(response));
		dispatch({
			type: AUTH_USER,
			payload: response
		});
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
		const response = await axios.post(
			`${API_URL}auth/signup`,
			formData
		);
		dispatch({
			type: AUTH_USER,
			payload: response.data
		});
		localStorage.setItem("user", JSON.stringify(response.data));
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

export const addProduct = formData => async dispatch => {
	try {
		const user = JSON.parse(localStorage.getItem("user"));
		const token = user.token;
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

export const addOrder = arrCartItems => async dispatch =>{
	try {
		const user = JSON.parse(localStorage.getItem("user"));
		const token = user.token;
		await axios.post(`${API_URL}products/addauth`,
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
