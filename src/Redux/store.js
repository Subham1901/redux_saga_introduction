import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import productSaga from "./productReducer/productSaga";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(compose(applyMiddleware(sagaMiddleWare)))
);

sagaMiddleWare.run(productSaga);

export default store;
