import 'core-js/modules/es.set';
import 'core-js/modules/es.map';
import 'core-js/modules/es.object.assign';
import 'core-js/modules/es.promise';
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
