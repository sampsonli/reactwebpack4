import {
    observable, action,
} from 'mobx';

class DemoStore {
    @observable age = 11;

    @action addAge = () => {
        this.age++;
    }

    mounted = (params) => {
        // console.log(this.age);
        console.log(this.age);
        console.log('-----------');
        console.log(params);
    }

    constructor() {
        if (module.hot) {
            Object.assign(this, module.hot.data && module.hot.data.entry);
            module.hot.dispose(data => {
                data.entry = JSON.parse(JSON.stringify(this));
            });
        }
    }
}

export default new DemoStore();
