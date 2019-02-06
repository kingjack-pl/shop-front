import { AUTH_USER } from "../actions/types";
import { isLogin, isAdmin } from "../actions/helpers";

const INIT = {
	isLogin: false,
	isAdmin: false,
	userName: ""
};

export default (state = INIT, action) => {
	const { type, payload } = action;

	switch (type) {
		case AUTH_USER:
			return { ...state, isLogin: isLogin(payload.token), isAdmin: isAdmin(payload.roles), userName: payload.username };
		default:
			return state;
	}
};
