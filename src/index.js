// import 'core-js/shim';
import 'core-js/modules/es6.set';
import 'core-js/modules/es6.map';
import 'core-js/modules/es6.object.assign';
import 'core-js/modules/es6.promise';
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import Router from './router';
import store from './store';
import './assets/common.css';

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('app'),
);
