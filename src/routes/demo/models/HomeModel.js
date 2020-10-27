import {inject, service, Model} from 'redux-spring';
import UserModel from './UserModel';

function wait(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(time);
        }, time);
    });
}

@service(module.id)
class HomeModel extends Model {
    loading = false;

    result = '888';

    /**
     * 初始化方法调用
     */
    init() {
        this.result = '2343';
    }

    /**
     * @type {UserModel}
     */
    @inject(UserModel) user;

    * changeName() {
        const name = `${Math.random().toFixed(4)}`;
        yield this.user.setData({name});
    }

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
