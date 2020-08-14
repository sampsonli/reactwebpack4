import React, {useEffect} from 'react';
import {useModel} from 'redux-spring';
import style from './style.less';

import HomeModel from '../../models/HomeModel';

export default () => {
    const {
        result, drawLottery, init, user, changeName,
    } = useModel(HomeModel);
    useEffect(() => {
        init();
    }, []);
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.txt} onClick={drawLottery}>
                    开始摇奖
                </div>

                <div className={style.txt} onClick={changeName}>
                    {user.name}
                </div>

                <div className={style.txtTest}>
                    开奖号码：
                    {result}
                </div>

            </div>

        </div>
    );
};
