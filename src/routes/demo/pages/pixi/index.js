import React, {useEffect} from 'react';
import style from './style.less';
import model from '../../models/pixiModel';

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
        // <div className={style.container} ref={model.initList} />
        <div className={style.container} ref={model.initMatter} />
    );
};
