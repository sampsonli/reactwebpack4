import React, {useEffect} from 'react';
import {useModel} from 'redux-spring';
import style from './style.less';

import HomeModel from '../../models/Home';

export default () => {
    const model = useModel(HomeModel);
    useEffect(() => {
        model.init();
    }, []);
    const {
        result,
    } = model;
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.txt} onClick={model.drawLottery}>
                    开始摇奖
                </div>

                <div className={style.txt}>
                    开始加载样式
                </div>

                <div className={style.txtTest}>
                    开奖号码：
                    {result}
                </div>

            </div>

        </div>
    );
};
