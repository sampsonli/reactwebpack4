import {
    observable, action, reaction,
} from 'mobx';

class DemoStore {
    ns = 'demoStore';

    @observable age = 11;

    @action addAge = () => {
        this.age++;
    }

    constructor() {
        if (module.hot) {
            Object.assign(this, window[this.ns] && JSON.parse(window[this.ns]));
            reaction(() => JSON.stringify({age: this.age}), (obj) => {
                window[this.ns] = obj;
            });
        }
    }
}
export default new DemoStore();
