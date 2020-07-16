import 'core-js/modules/es.set';
import 'core-js/modules/es.map';
import 'core-js/modules/es.object.assign';
import 'core-js/modules/es.promise';
import React from 'react';
import ReactDOM from 'react-dom';
import deliverer from 'react-deliverer';
import { Provider } from 'react-redux';
import loadjs from '~/common/loadjs';
import Router from './router';
import store from './store';

import './assets/common.css';

deliverer(store);
if (window.location.href.indexOf('debug=1') > -1) {
    loadjs('lib/vconsole.min.js', 'VConsole').then(VConsole => {
        window._vc = new VConsole();
    });
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
