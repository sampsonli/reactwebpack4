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

    * loadStyle() {
        const remove = yield loadCss('test.css');
        yield wait(3000);
        remove();
    }

    * drawLottery() {
        if (this.loading) {
            return;
        }
        this.loading = true;
        let i = 30;
        while (i--) {
            [, this.#result] = String(Math.random().toFixed(6)).split('.');
            if (i < 6) {
                yield wait((6 - i) * 100);
            } else {
                yield wait(100);
            }
        }
        this.loading = false;
    }
}
export default new HomeModel();
