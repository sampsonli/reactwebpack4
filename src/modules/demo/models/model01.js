import store from '~/store';

const model = {
    ns: 'demo2',
    state: {
        abc: 123,
    },
    mutations: {
        changeAbc(state, payload) {
            state.abc = payload;
        },
    },
    actions: {
        getUserInfo({commit}, payload) {
            commit('changeAbc', payload);
        },
    },
};
export default store.connect(model);
