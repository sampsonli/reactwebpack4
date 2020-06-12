import React from 'react';
import style from './style.less';
import model from '../../models';

export default () => {
    const data = model.useData();
    const {
        result,
    } = data;
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.txt} onClick={model.drawLottery}>
                    开始摇奖
                </div>

                <div className={style.txtTest} onClick={() => model.changeName()}>
                    开奖号码：
                    {result}
                </div>

            </div>


        </div>
    );
};
