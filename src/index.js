import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store";
import "./style.css";
const root = ReactDOM.createRoot(document.getElementById("root-container"));
console.log(store);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
