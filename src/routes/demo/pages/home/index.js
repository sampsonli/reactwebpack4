import React, {useEffect} from 'react';
import {useModel} from 'redux-spring';
import style from './style.less';

import HomeModel from '../../models/HomeModel';

export default () => {
    const model = useModel(HomeModel);
    const {
        result, user,
    } = model;
    useEffect(() => {
        model.init();
    }, []);
    // model.init()
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.txt} onClick={model.drawLottery}>
                    开始摇奖
                </div>

                <div className={style.txt} onClick={model.changeName}>
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
