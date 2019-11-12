// 如果是产品（打包）模式，store 采用此配置

import {
    createStore,
} from 'redux';
import spirits from 'react-deliverer';

const store = createStore(
    () => {},
    window.__INITIAL_STATE__,
);
const asyncReducers = {};
spirits(store, asyncReducers);
export default store;
