import { ADD_ERROR, ADD_SUCCESS } from "../actions/types";

const INIT = {
	errorMessage: null,
	successMessage: null
};

export default (state = INIT, action) => {
	switch (action.type) {
		case ADD_ERROR:
			return { errorMessage: action.payload, successMessage: null };
		case ADD_SUCCESS:
			return { errorMessage: null, successMessage: action.payload };
		default:
			return state;
	}
};
