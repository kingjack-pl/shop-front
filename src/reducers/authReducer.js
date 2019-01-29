import { AUTH_USER, AUTH_ERR } from "../actions/types";

const INIT = {
	isLogin: false,
	isAdmin: false,
	errorMessage: ""
};

export default (state = INIT, action) => {
	switch (action.type) {
		case AUTH_USER:
			return { ...state, isLogin: action.payload.token, isAdmin: action.payload.admin };
		case AUTH_ERR:
			return { ...state, errorMessage: action.payload };
		default:
			return state;
	}
};
