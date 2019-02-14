import store from '~/store';
import ajax from '../common/ajax';

const model = {
    ns: 'test',
    state: {
        newsList: null,
        abc: 123,
    },
    mutations: {
        setNewsList(state, list) {
            state.newsList = list;
        },
        changeAbc(state, payload) {
            state.abc = payload;
        },
    },
    actions: {
        async getNewsList({commit}, type) {
            const info = await ajax.get(`/news/${type || ''}`);
            if (info.stat === '1') {
                commit('setNewsList', info.data);
                return info.data;
            }
        },
        getUserInfo({commit}, payload) {
            commit('changeAbc', payload);
        },
    },
};
export const {ns} = model;
export default store.connect(model);
