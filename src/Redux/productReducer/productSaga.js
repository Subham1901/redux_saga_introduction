import { put, takeEvery } from "redux-saga/effects";
import { FETCH } from "../helper";

function* getProducts() {
  try {
    let data = yield fetch("https://dummyjson.com/products");
    data = yield data.json();
    yield put({ type: "SET_PRODUCT", payload: data });
  } catch (error) {
    console.warn(error);
    yield put({ type: "SET_PRODUCT_RECV_ERROR", error: "Not found" });
  }
}

function* productSaga() {
  yield takeEvery(FETCH, getProducts);
}
export default productSaga;
