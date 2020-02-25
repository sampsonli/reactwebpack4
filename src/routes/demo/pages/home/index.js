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
                <div className={style.txt} onClick={model.getTime}>
                    2020年--
                    {(data.time)}
                </div>
                <div className={style.txt}>
                    <Radar />
                </div>
            </div>


        </div>
    );
};
