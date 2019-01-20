import { AUTH_USER, AUTH_ERR } from "../actions/types";

const INIT = {
	isLogin: "",
	errorMessage: ""
};

export default (state = INIT, action) => {
	switch (action.type) {
		case AUTH_USER:
			return { ...state, isLogin: action.payload };
		case AUTH_ERR:
			return { ...state, errorMessage: action.payload };
		default:
			return state;
	}
};
