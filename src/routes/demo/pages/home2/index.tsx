import React, {useEffect} from 'react';
import {useModel} from 'redux-spring';
import style from './style.less';

import HomeModel from '../../models/HomeModel';

export default () => {
    const model = useModel(HomeModel);
    const {
        result, drawLottery, changeName,
    } = model;
    useEffect(() => {
        model.init();
    }, []);
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.txt} onClick={drawLottery}>
                    开始摇奖
                </div>

                <div className={style.txt} onClick={changeName} />

                <div className={style.txtTest}>
                    开奖号码：
                    {result}
                </div>

            </div>

        </div>
    );
};
