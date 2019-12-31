import {deliver} from 'react-deliverer';

function wait(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Date());
        }, time);
    });
}

@deliver('demo_home')
class HomeModel {
    loading = false;

    time = new Date();

    * getTime() {
        console.log('hello');
        this.loading = true;
        this.time = yield wait(1000);
        this.loading = false;
        this.time = yield wait(1000);
        this.time = yield wait(1000);
        this.time = yield wait(1000);
    }

    print() {
        console.log('hello');
    }
}
export default new HomeModel();
