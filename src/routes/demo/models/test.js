import {connect, action} from 'react-deliverer';
// import ajax from '../common/ajax';

@connect('demo')
class Demo {
    newList = null

    abc = 3

    @action
    setNewsLis(list) {
        this.newsList = list;
    }

    @action
    changeAbc(payload) {
        this.abc = payload;
    }

    getAbc(num) {
        this.changeAbc(num);
    }

    getNewList() {
        setTimeout(() => {
            this.setNewsLis([{
                title: 'hello',
            }, {
                title: 'welcome',
            }]);
        }, 1000);
    }
}

export default new Demo();
