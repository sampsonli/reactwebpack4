
import {
    observable, action, runInAction, reaction,
} from 'mobx';
import axios from 'axios';

class MainStore {
    ns = 'mainStore';

    @observable list = null;

    @observable detail = null;

    @action getCompList = async ({key}) => {
        const info = await axios.get(`https://www.qichacha.com/tax_getList?key=${key}&user_id=8461cd3ed931cd0bcffef88984ffd7f0`);
        if (info.status === 200) {
            runInAction(() => {
                this.list = info.data;
            });
        }
    }

    @action getTaxDetail = async ({keyno}) => {
        const info = await axios.get(`https://www.qichacha.com/tax_getCompanyBank?keyno=${keyno}&user_id=8461cd3ed931cd0bcffef88984ffd7f0`);
        if (info.status === 200) {
            runInAction(() => {
                this.detail = info.data;
            });
        }
    }

    constructor() {
        if (module.hot) {
            Object.assign(this, window[this.ns] && JSON.parse(window[this.ns]));
            reaction(() => JSON.stringify({list: this.list, detail: this.detail}), (obj) => {
                window[this.ns] = obj;
            });
        }
    }
}
export default new MainStore();
