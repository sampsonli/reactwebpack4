import {observable, action, computed} from 'mobx';

class Demo {
    name = 'lichun';

    @observable age = 11;

    @observable friend = null;

    @computed get total() {
        return `${this.name}-2--${this.age}`;
    }

    @action addAge = () => {
        this.age++;
    }

    @action setFriend = () => {
        this.friend = {
            name: 'hello',
            age: 111111,
        };
    }

    @action changeFriendName = () => {
        if (this.friend) {
            this.friend.name = 'welcome';
        }
    }
}
export default new Demo();
