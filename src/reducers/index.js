import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import notificationReducer from "./notificationReducer";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
	form: formReducer,
	notification: notificationReducer,
	auth: authReducer,
	products: productReducer,
	orders: orderReducer
});
