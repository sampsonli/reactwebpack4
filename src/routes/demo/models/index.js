import {deliver} from 'react-deliverer';
import loadCss from '~/common/loadCss';

function wait(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(time);
        }, time);
    });
}

@deliver('demo')
class HomeModel {
    loading = false;

    #result = '888';

    init() {

    }

    loadStyle() {
        loadCss('test.css');
    }

    * drawLottery() {
        if (this.loading) {
            return;
        }
        this.loading = true;
        let i = 50;
        while (i--) {
            [, this.#result] = String(Math.random().toFixed(3)).split('.');
            if (i < 10) {
                yield wait((10 - i) * 100);
            } else {
                yield wait(100);
            }
        }
        this.loading = false;
    }
}
export default new HomeModel();
