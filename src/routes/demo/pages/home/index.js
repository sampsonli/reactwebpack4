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
        a, b, info, loading, name,
    } = data;
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.txt} onClick={() => model.setData({a: a + 2, b: b + 2})}>
                    2020年--
                    {`a:${a}, b:${b}`}
-
                    {name}
                </div>

                <div className={style.txtTest} onClick={() => model.changeName()}>
                    {loading ? 'loading ' : info}
                </div>

            </div>


        </div>
    );
};
