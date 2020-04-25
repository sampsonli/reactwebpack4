import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import style from './style.less';
import model from '../../models';

export default () => {
    const data = model.useData();
    const location = useLocation();
    useEffect(() => {
        model.init();
    }, [location.search]);
    const {
        a, b, info, loading,
    } = data;
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.txt} onClick={() => model.setData({a: a + 1, b: b + 2})}>
                    2020年--
                    {`a:${a}, b:${b}`}
                </div>
                {loading ? <div className={style.txtTest}>加载中</div> : (
                    <div className={style.txtTest}>
                        {info}
                    </div>
                )}
            </div>


        </div>
    );
};
