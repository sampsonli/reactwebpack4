import {deliver} from 'react-deliverer';
import Base from './base';

function ajax(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(parseInt(Math.random() * 100, 10));
        }, time);
    });
}

@deliver('demo')
class HomeModel extends Base {
    #loading = false;

    #info;

    #a = 3; // 测试数据

    /**
     * 测试数据
     * @type {number}
     */
    #b = 12;

    * init() {
        this.#loading = true;
        this.#info = yield ajax(2000);
        this.#loading = false;
    }
}
export default new HomeModel();
