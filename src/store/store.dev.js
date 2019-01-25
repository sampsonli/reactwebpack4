// 如果是开发模式，store 采用此配置

import {
    createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import logger from 'redux-logger';
import initReducers from '../reducers';
import helper from './helper';

const store = createStore(
    combineReducers(initReducers),
    window.__INITIAL_STATE__,
    compose(
        applyMiddleware(logger),
    ),
);
const asyncReducers = {
    ...initReducers,
};
helper(store, asyncReducers);
if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
        store.replaceReducer(combineReducers({
            ...asyncReducers,
        }));
    });
}

export default store;
