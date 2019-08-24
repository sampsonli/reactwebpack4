import React, {useState, useEffect} from 'react';
import P from 'prop-types';

import {observer} from 'mobx-react';
import style from './style.less';
import demo from '../../models/demo';

export default observer(() => {
    const [count, addCount] = useState(0);
    useEffect(() => {
        console.log(count, '变了');
    }, [])
    return (
        <div className={`l-full l-flex-column ${style.wrapper}`}>
            <div className={style.header} onClick={demo.setFriend}>
                <span>
                        新闻头条-33333--
                    {demo.age}
                </span>
            </div>
            <div className="l-flex-1 l-relative">
                <div className="l-full" id="wrapper">
                    {demo.friend && (
                        <div onClick={demo.changeFriendName}>
                            name:
                            {demo.friend.name}
                            <br />
                            age:
                            {demo.friend.age}
                            <br />
                            count:
                            {count}
                        </div>
                    )}
                    <button type="button" onClick={demo.addAge}>年龄+1</button>
                    <button type="button" onClick={() => addCount(count + 1)}>数字+1</button>
                </div>

            </div>

        </div>
    );
});
/*
@observer
class ScrollDemo extends Component {
    componentDidMount() {
        const {location, history} = this.props;
        console.log(location);
        console.log(history);
    }
    render() {
        return (
            <div className={`l-full l-flex-column ${style.wrapper}`}>
                <div className={style.header} onClick={demo.setFriend}>
                    <span>
                        新闻头条-333--
                        {demo.age}
                    </span>
                </div>
                <div className="l-flex-1 l-relative">
                    <div className="l-full" id="wrapper">
                        {demo.friend && (
                            <div onClick={demo.changeFriendName}>
                        name:
                                {demo.friend.name}
                                <br />
                        age:
                                {demo.friend.age}
                            </div>
                        )}
                        <button type="button" onClick={demo.addAge}>年龄+1</button>
                    </div>

                </div>

            </div>
        );
    }
}
ScrollDemo.propTypes = {
    location: P.shape({search: P.string}).isRequired,
    history: P.shape({replace: P.func, push: P.func}).isRequired,
};
export default ScrollDemo;
*/
