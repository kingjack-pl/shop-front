import { FETCH_ORDERS } from "../actions/types";

const init = {
    arrOrdersList: [],
};

export default function(state = init, action) {
	switch (action.type) {
		case FETCH_ORDERS:
			return {
				...state,
                arrOrdersList: action.payload
			};
		default:
			return state;
	}
}
