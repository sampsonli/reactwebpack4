import {deliver} from 'react-deliverer';

function ajax(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(parseInt(Math.random() * 100, 10));
        }, time);
    });
}

@deliver('demo')
class HomeModel {
    #loading = false;

    #info;

    #a = 3;

    #b = 12;

    * init() {
        this.#loading = true;
        this.#info = yield ajax(2000);
        this.#loading = false;
    }
}
export default new HomeModel();
