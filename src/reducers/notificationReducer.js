import { ADD_ERROR, ADD_SUCCESS } from "../actions/types";

const INIT = {
	errorMessage: null,
	successMessage: null,
	isLoading: false
};

export default (state = INIT, action) => {
	switch (action.type) {
		case ADD_ERROR:
			return { errorMessage: action.payload, successMessage: null, isLoading: false };
		case ADD_SUCCESS:
			return { errorMessage: null, successMessage: action.payload, isLoading: false };
		default:
			return state;
	}
};
