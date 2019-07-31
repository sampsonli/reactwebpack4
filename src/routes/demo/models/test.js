import {connect} from 'react-spirits';
import ajax from '../common/ajax';

export default connect({
    ns: 'test',
    state: {
        newsList: null,
        abc: 0,
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

        },
        getUserInfo(num) {
            this.commit('changeAbc', num);
        },
    },
});
