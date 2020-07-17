import React, {useEffect} from 'react';
import style from './style.less';
import model from '../../models/konvaModel';

export default () => {
    const data = model.useData();
    useEffect(() => {
        // model.init();
    }, []);
    const {
        loading,
    } = data;
    if (loading) return '';
    return (
        <div className={style.container}>
            <div className={style.content} ref={model.initEle} />

        </div>
    );
};
