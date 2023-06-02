import { put, takeEvery } from "redux-saga/effects";
import { FETCH } from "../helper";

function* getProducts() {
  yield put({ type: "LOADING_STATE_TRUE" });
  try {
    let data = yield fetch("https://dummyjsosn.com/products");
    data = yield data.json();
    yield put({ type: "SET_PRODUCT", payload: data });
    yield put({ type: "LOADING_STATE_FALSE" });
  } catch (error) {
    yield put({ type: "LOADING_STATE_FALSE" });
    console.warn(error);
    yield put({ type: "SET_PRODUCT_RECV_ERROR", error: error.message });
  }
}

function* productSaga() {
  yield takeEvery(FETCH, getProducts);
}
export default productSaga;
