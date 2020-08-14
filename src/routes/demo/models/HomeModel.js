import {AutoWired, Controller} from 'redux-spring';
import UserModel from './UserModel';

function wait(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(time);
        }, time);
    });
}

@Controller('home1')
class HomeModel {
    loading = false;

    result = '888';

    init() {
        this.result = '2342';
        // console.log(this.user);
    }

    @AutoWired(UserModel)
    user;

    changeName() {
        // this.user.name = 'hello';
        // console.log(this.user);
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
