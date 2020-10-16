import 'core-js/modules/es.set';
import 'core-js/modules/es.map';
import 'core-js/modules/es.object.assign';
import 'core-js/modules/es.promise';
import React from 'react';
import ReactDOM from 'react-dom';
import spring from 'redux-spring';
import { Provider } from 'react-redux';
import loadjs from '~/common/loadjs';
import store from './store';
import './assets/common.css';

spring(store);
const Router = require('./router').default;

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
