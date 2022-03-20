import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import { LoginRenterReducer } from "./store/Reducers/UserAuthReducer";

import { UserReducer } from "./store/Reducers/userReducers/UserReducer";
import { UserLogRegReducer } from "./store/Reducers/userReducers/UserLogRegReducer";
import { UserSettingReducer } from "./store/Reducers/userReducers/UserSettingReducer";
import { OwnerReducer } from "./store/Reducers/ownerReducers/OwerReducer";
import { OwnerLogRegReducer } from "./store/Reducers/ownerReducers/OwnerLogRegReducer";
import { OwnerSettingReducer } from "./store/Reducers/ownerReducers/OwnerSettingReducer";
import { FetchRentListReducer } from "./store/Reducers/RentListReducer/RentListReducer";


const reducers = combineReducers({
  UserReducer,
  UserSettingReducer,
  UserLogRegReducer,
  OwnerReducer,
  OwnerLogRegReducer,
  OwnerSettingReducer,
  FetchRentListReducer,
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
