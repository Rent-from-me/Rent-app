import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { RentReducer } from "./store/Reducers/RentReducer";
import { FetchItemReducer } from "./store/Reducers/FetchItemReducer";
import thunk from "redux-thunk";
import { LoginRenterReducer } from "./store/Reducers/UserAuthReducer";


const reducers = combineReducers({
  RentReducer,
  FetchItemReducer,
  LoginRenterReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
