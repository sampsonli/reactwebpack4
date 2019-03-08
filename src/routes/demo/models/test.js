import store from '~/store';
import ajax from '../common/ajax';

const model = {
    ns: 'test',
    state: {
        newsList: null,
        abc: 'hello world',
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
        async getNewsList() {
            try {
                const info = await ajax.get(`/news/${''}`);
                if (info.stat === '1') {
                    this.commit('setNewsList', info.data);
                    return info.data;
                }
            } catch (e) {
                console.error(e.message);
            }
            return null;
        },
        getUserInfo({num}) {
            this.commit('changeAbc', num);
        },
    },
};
export const {ns} = model;
export default store.connect(model);
