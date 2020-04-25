import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import style from './style.less';
import model from '../../models';
import Radar from './Radar';

export default () => {
    const data = model.useData();
    const location = useLocation();
    useEffect(() => {
        model.getTime().catch(e => console.log(e));
    }, [location.search]);
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.txt} onClick={() => model.setData({a: data.a + 1, b: data.b + 2})}>
                    2020年--
                    {(data.time)}
--
                    {data.a}
--
                    {data.b}
                </div>
                <div className={style.txtTest}>
                    <Radar />
                </div>
            </div>


        </div>
    );
};
