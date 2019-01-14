/**
 *  这个文件永远也不要修改, 只需要往reducers添加文件就可以了， 会自动加载新添加的文件
 *  @auth Sampson.Li
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducers = {};
((r) => {
    r.keys().forEach(key => {
        if (!~key.indexOf('index.js')) {
            reducers[key.split('/')[1].split('.')[0]] = r(key).default;
        }
    });
})(require.context('./', true, /\.js$/));

export default reducers;
