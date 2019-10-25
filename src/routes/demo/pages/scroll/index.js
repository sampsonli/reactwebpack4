import React, {useEffect} from 'react';

import {observer} from 'mobx-react';
import style from './style.less';
import store from '../../store/DemoStore';

export default observer(() => {
    useEffect(() => {
        // store.age = 0

    }, []);
    return (
        <div className={`l-full l-flex-column ${style.wrapper}`}>
            <div className={style.header}>
                <span>
                        新闻头条---
                    {store.age}
                </span>
            </div>
            <div className="l-flex-1 l-relative">
                <div className="l-full" id="wrapper">
                    <button type="button" onClick={store.addAge}>年龄+1</button>
                </div>

            </div>

        </div>
    );
});
