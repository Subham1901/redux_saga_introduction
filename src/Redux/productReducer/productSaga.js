import { put, takeEvery } from "redux-saga/effects";
import { FETCH } from "../helper";

function* getProducts() {
  let data = yield fetch("https://dummyjson.com/products");
  data = yield data.json();
  yield put({ type: "SET_PRODUCT", payload: data });
}

function* productSaga() {
  yield takeEvery(FETCH, getProducts);
}
export default productSaga;
