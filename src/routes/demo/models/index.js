import {deliver} from 'react-deliverer';

function wait(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, time);
    });
}

@deliver('hello')
class HomeModel {
    #running = false;

    #time = 100;

    * setTime() {
        yield wait(1000);
        this.#time = 400;
        yield wait(1000);
        return 'hello';
    }

    * getTime() {
        yield wait(1000);
        this.#time = 10;
        const info = yield this.setTime();
        --this.#time;
        yield wait(1000);
        this.#time = 120;
        yield wait(1000);
        this.#time = info;
    }

    changeRunning() {
        this.#running = true;
    }

    print() {
        console.log(this.#time);
    }
}
export default new HomeModel();
