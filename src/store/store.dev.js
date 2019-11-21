// 如果是开发模式，store 采用此配置

import {
    createStore, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';


const store = createStore(
    () => {},
    window.__INITIAL_STATE__,
    compose(
        applyMiddleware(logger),
    ),
);

export default store;
