import {deliver} from 'react-deliverer';

function wait(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Date());
        }, time);
    });
}

@deliver('hello')
class HomeModel {
    ns = 'lichun'

    #running = false;

    #time = new Date();

    * getTime() {
        if (this.running) return;
        this.running = true;
        this.#time = yield wait(1000);
        this.i = 10;
        while (this.i--) {
            this.#time = yield wait(1000);
        }
        console.log('10s later');
        this.running = false;
    }

    print() {
        console.log(this.#time);
    }
}
export default new HomeModel('lichun');
