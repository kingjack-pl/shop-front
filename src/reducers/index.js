import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
	form: formReducer,
	auth: authReducer,
	products: productReducer,
	orders: orderReducer
});
