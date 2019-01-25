import store from '~/store';

const model = {
    ns: 'test',
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
