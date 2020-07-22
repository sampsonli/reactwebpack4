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
    const list = [];
    for (let i = 0; i < 100; i++) {
        list.push(i);
    }
    return (
        <div className={style.container}>
            <div className={style.header} onClick={model.testClick}>自定义滚动测试1</div>
            <div className={style.content} ref={model.initScroll}>
                <div>
                    <div className={style.topCt}>hello</div>
                    <div className={style.headBar} id="headBar">headbarcontent</div>
                    <ul className={style.list}>
                        {list.map(key => (
                          <li key={key} className={style.item}>
                              list item-
                              {key}
                          </li>
                        ))}
                    </ul>
                </div>

            </div>

        </div>
    );
};
