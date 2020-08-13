import loadCss from '~/common/loadCss';
import {autoWired, resource} from '~/common/spring';
import UserModel from '~/routes/demo/models/User';

function wait(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(time);
        }, time);
    });
}

@resource('home1')
class HomeModel {
    loading = false;

    result = '888';

    init() {
        this.result = 234;
        console.log(this.user);
    }

    @autoWired(UserModel) user;

    * drawLottery() {
        if (this.loading) {
            return;
        }
        this.loading = true;
        let i = 30;
        while (i--) {
            [, this.result] = String(Math.random().toFixed(6)).split('.');
            if (i < 6) {
                yield wait((6 - i) * 100);
            } else {
                yield wait(100);
            }
        }
        this.loading = false;
    }
}
export default HomeModel;
