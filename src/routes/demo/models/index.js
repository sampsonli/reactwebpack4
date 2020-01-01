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
    #loading = false;

    #time = new Date();

    constructor(data) {
        this.#time = data;
    }

    * getTime() {
        // alert('hello')
        this.#loading = true;
        this.#time = yield wait(1000);
        this.#loading = false;
        this.i = 20;
        while (this.i--) {
            this.#time = yield wait(1000);
        }
        console.log('20s later');
    }

    print() {
        console.log(this.#time);
    }
}
const model = new HomeModel();
export default model;
