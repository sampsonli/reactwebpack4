// 如果是产品（打包）模式，store 采用此配置

import {createStore, combineReducers} from 'redux';
import initReducers from '../reducers';
import helper from './helper';

const store = createStore(
    combineReducers(initReducers),
    window.__INITIAL_STATE__,
);
const asyncReducers = {
    ...initReducers,
};
helper(store, asyncReducers);
export default store;
