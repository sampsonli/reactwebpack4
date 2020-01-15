import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import style from './style.less';
import model from '../../models';

export default () => {
    const data = model.useData();
    const location = useLocation();
    useEffect(() => {
        model.getTime();
    }, [location.search]);
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.txt}>
                    2020年-
                    {(data.time)}
                </div>
            </div>


        </div>
    );
};
