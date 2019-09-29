import React, {useState, useEffect} from 'react';

import {observer} from 'mobx-react';
import style from './style.less';
import DemoStore from '../../store/DemoStore';

const store = DemoStore.getInstance();
export default observer(() => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(count, '变了');
    }, []);
    return (
        <div className={`l-full l-flex-column ${style.wrapper}`}>
            <div className={style.header} onClick={store.setFriend}>
                <span>
                        新闻头条-33333--
                    {store.age}
                </span>
            </div>
            <div className="l-flex-1 l-relative">
                <div className="l-full" id="wrapper">
                    {store.friend && (
                        <div onClick={store.changeFriendName}>
                            name:
                            {store.friend.name}
                            <br />
                            age:
                            {store.friend.age}
                            <br />
                            count:
                            {count}
                        </div>
                    )}
                    <button type="button" onClick={store.addAge}>年龄+1</button>
                    <button type="button" onClick={() => setCount(count + 1)}>数字+1</button>
                </div>

            </div>

        </div>
    );
});
