import {connect} from 'react-spirits';
import ajax from '../common/ajax';

export default connect({
    ns: 'test',
    state: {
        newsList: null,
        abc: '李春李春',
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
        adddd(payload, context) {
            console.log('hello');
            context.commit('hello');
        },
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
        getUserInfo(num) {
            this.commit('changeAbc', num);
        },
    },
});
