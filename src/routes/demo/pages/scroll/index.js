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
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                    <li className={style.item}>list item</li>
                </ul>
            </div>

        </div>
    );
};
