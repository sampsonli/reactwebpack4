import React, {useEffect} from 'react';
import style from './style.less';
import model from '../../models/scrollModel';

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
            <div className={style.header}>自定义滚动测试1</div>
            <div className={style.content} ref={model.initList}>
                <ul className={`${style.list} list`}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(key => (
                        <li key={key} className={style.item}>
                        list item-
                        {key}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};
