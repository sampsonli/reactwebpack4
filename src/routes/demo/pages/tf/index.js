import React, {useEffect} from 'react';
import {useData} from 'react-deliverer';
import style from './style.less';
import model from '../../models/tfModel';

export default () => {
    const data = useData(model.ns);
    useEffect(() => {
        model.init();
    }, []);
    const {loading} = data;
    return (
        <div className={style.containerTf}>
            <div className={style.content}>
                {loading}
                -tf
            </div>

        </div>
    );
};
