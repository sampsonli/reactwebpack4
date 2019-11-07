import {
    observable, action,
} from 'mobx';

class DemoStore {
    @observable age = 11;

    @action addAge = () => {
        console.log('hello2e3373555')
        this.age++;
    }

    constructor() {
        if (module.hot) {
            module.hot.dispose(data => {
                data.instance = this;
            });
            Object.assign(this, module.hot.data.instance);
        }
    }
}

export default new DemoStore();
