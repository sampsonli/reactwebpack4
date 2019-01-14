import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import Router from "./router";
import store from './store';
import './assets/common.css'

ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>,
    document.getElementById("app")
);


