import {
    observable, action, reaction,
} from 'mobx';

class DemoStore {


    @observable age = 11;

    @action addAge = () => {
        this.age++;
    }

    constructor() {
        if (module.hot) {
            const ns = 'demoStore';
            Object.assign(this, window[ns] && JSON.parse(window[ns]));
            reaction(() => JSON.stringify({age: this.age}), (obj) => {
                window[ns] = obj;
            });
        }
    }
}
export default new DemoStore();
