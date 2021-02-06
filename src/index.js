import 'core-js/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import spring from 'redux-spring';
import { Provider } from 'react-redux';
import loadjs from '~/common/loadjs';
import Router from './router';
import store from './store';

import './assets/common.css';

spring(store);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router />
        </Provider>,
        document.getElementById('app'),
    );
};
if (window.location.href.indexOf('debug=1') > -1) {
    loadjs('lib/vconsole.min.js', 'VConsole').then(VConsole => {
        window._vc = new VConsole();
        render();
    });
} else {
    render();
}
if (module.hot) {
    module.hot.accept();
}
export default render;
