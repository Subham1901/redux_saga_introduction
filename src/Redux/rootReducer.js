import { combineReducers } from "redux";
import cartReducer from "./cartReducer/reducer";
import productReducer from "./productReducer/productReducer";

export default combineReducers({ cart: cartReducer, products: productReducer });
