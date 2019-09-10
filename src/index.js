import 'core-js/modules/es.set';
import 'core-js/modules/es.map';
import 'core-js/modules/es.object.assign';
import 'core-js/modules/es.promise';
import 'core-js/modules/es6.symbol';
import 'core-js/modules/es6.array.from';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import './assets/common.css';

ReactDOM.render(
    <Router />,
    document.getElementById('app'),
);
if (module.hot) {
    module.hot.accept();
}
