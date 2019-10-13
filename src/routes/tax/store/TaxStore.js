
import {
    observable, action, runInAction,
} from 'mobx';
import axios from 'axios';

let instance;
export default
class TaxStore {
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


    static getInstance = () => {
        if (!instance) {
            instance = new TaxStore();
        }
        return instance;
    }
}
