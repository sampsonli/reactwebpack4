import 'core-js/modules/es.set';
import 'core-js/modules/es.map';
import 'core-js/modules/es.object.assign';
import 'core-js/modules/es.promise';
import React from 'react';
import ReactDOM from 'react-dom';
import deliverer from 'react-deliverer';
import VConsole from 'vconsole';

import { Provider } from 'react-redux';
import Router from './router';
import store from './store';

import './assets/common.css';

deliverer(store);
if (process.env.NODE_ENV === 'development') {
    window._vc = new VConsole();
}
ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('app'),
);
if (module.hot) {
    module.hot.accept();
}
