
import {
    observable, action, reaction,
} from 'mobx';
import axios from 'axios';

class MainStore {
    @observable list = null;

    @observable detail = null;

    @action setList = (list) => {
        this.list = list;
    }

    @action setDetail = (detail) => {
        this.detail = detail;
    }

    getCompList = async ({key}) => {
        const info = await axios.get(`https://www.qichacha.com/tax_getList?key=${key}&user_id=8461cd3ed931cd0bcffef88984ffd7f0`);
        if (info.status === 200) {
            this.setList(info.data);
        }
    }

    getTaxDetail = async ({keyno}) => {
        const info = await axios.get(`https://www.qichacha.com/tax_getCompanyBank?keyno=${keyno}&user_id=8461cd3ed931cd0bcffef88984ffd7f0`);
        if (info.status === 200) {
            this.setDetail(info.data);
        }
    }

    constructor() {
        if (module.hot) {
            const ns = 'mainStore';
            Object.assign(this, window[ns] && JSON.parse(window[ns]));
            reaction(() => JSON.stringify({list: this.list, detail: this.detail}), (obj) => {
                window[ns] = obj;
            });
        }
    }
}
export default new MainStore();
