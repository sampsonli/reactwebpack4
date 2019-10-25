import {
    observable, action, reaction,
} from 'mobx';

class DemoStore {
    ns = 'demoStore';

    @observable age = 222;

    @action addAge = () => {
        this.age++;
    }

    constructor() {
        if (module.hot) {
            const store = window[this.ns] && JSON.parse(window[this.ns]);
            Object.assign(this, store);
            reaction(() => JSON.stringify(this), () => {
                window[this.ns] = JSON.stringify(this);
            });
        }
    }
}
const store = new DemoStore();
export default store;
