import {CHANGE_COLOR, NS} from './actions/types';
import store from '~/store';

const initState = {
    color: '#883499',
};
const mutations = {
    [CHANGE_COLOR](state, payload) {
        state.color = payload;
    },
};
const reducer = (state = initState, action) => {
    if (mutations[action.type]) {
        const newState = {...state};
        return mutations[action.type](newState, action.payload) || newState;
    }
    return state;
};

store.injectReducer(NS, reducer);
