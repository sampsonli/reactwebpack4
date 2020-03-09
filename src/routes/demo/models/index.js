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

    #time = 1;


    * getTime() {
        console.log(this.#time);
        this.#time = 1;
        try {
            yield wait(1000);
            this.a.b = 2;
            this.#time = 0;
        } catch (e) {
            console.log(e.message);
            this.#time = 2;
            yield wait(1000);
            this.#time = 3;
            throw e;
        }
    }

    changeRunning() {
        this.#running = true;
    }

    print() {
        console.log(this.#time);
    }
}
export default new HomeModel();
