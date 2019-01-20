// import axios from "axios";
// import { API_URL } from "../Config";
import { AUTH_USER, AUTH_ERR } from "./types";

export const signIn = (formData, callback) => async dispatch => {
	try {
		// const response = await axios.post(
		// 	`${API_URL}/signin`,
		// 	formData
		// );
		let response = {
			data: {
				auth: true
			}
		};

		dispatch({
			type: AUTH_USER,
			payload: response.data.auth
		});

		localStorage.setItem("auth", response.data.auth);

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

export const signOut = callback => {
	localStorage.removeItem("auth");

	callback();

	return {
		type: AUTH_USER,
		payload: false
	};
};
