import {deliver, mutate} from 'react-deliverer';
// import ajax from '../common/ajax';

@deliver('demo')
class DemoModel {
    newList

    abc = 3

    @mutate
    setNewsLis(list) {
        this.newsList = list;
    }

    @mutate
    changeAbc(payload) {
        this.abc = payload;
    }

    getAbc() {
        this.changeAbc(Math.floor(Math.random() * 100));
    }

    getNewList() {
        console.log('getNewList553');
        setTimeout(() => {
            this.setNewsLis([{
                title: 'hello',
            }, {
                title: 'welcome',
            }]);
        }, 1000);
    }
}

export default new DemoModel();
