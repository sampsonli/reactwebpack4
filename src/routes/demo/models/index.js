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
        let i = 50;
        while (i--) {
            yield wait(80);
            this.#time++;
        }
        return '新年快乐！';
    }

    * getTime() {
        this.#time = 100;
        const info = yield this.setTime();

        let i = 100;
        while (i--) {
            yield wait(60);
            this.#time--;
        }
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
