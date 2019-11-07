import {
    observable, action,
} from 'mobx';

class DemoStore {
    @observable age = 11;

    @action addAge = () => {
        this.age++;
    }

    mounted = () => {
        console.log(this.age);
    }

    constructor() {
        if (module.hot) {
            Object.assign(this, module.hot.data && module.hot.data.entry);
            module.hot.dispose(data => {
                data.entry = this;
            });
        }
    }
}

export default new DemoStore();
