import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxPromiseMiddleWare from "redux-promise";
// import reduxThunkMiddleWare from "redux-thunk";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import rootReducer from "./reducers";

const createStoreMiddleware = applyMiddleware(reduxPromiseMiddleWare)(
  createStore
);
const myStore = createStoreMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={myStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
