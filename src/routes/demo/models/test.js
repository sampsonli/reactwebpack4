import {connect} from 'react-spirits';
import ajax from '../common/ajax';

export default connect({
    ns: 'test',
    state: {
        newsList: null,
        abc: '李春李春',
    },
    mt: {
        setNewsList(list) {
            this.newsList = list;
        },
        changeAbc(payload) {
            this.abc = payload;
            // this.
        },
    },
    act: {
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
