import React, {useEffect} from 'react';
import P from 'prop-types';
import {connect} from 'react-redux';

import store from '../../models/test';
import style from './style.less';

const Scroll = ({stat}) => {
    useEffect(() => {
        store.getNewList();
    }, []);
    return (
        <div className={`l-full l-flex-column ${style.wrapper}`}>
            <div className={style.header} onClick={() => store.getAbc()}>
                <span>
                        新闻头条-
                    {stat.abc}
                </span>
            </div>
            <div className="l-flex-1 l-relative">
                <div className="l-full" id="wrapper">
                    {stat.newsList
                    && (
                        <ul className={style.list} id="target">
                            {stat.newsList.map(item => (
                                <li key={item.title} className={style.item}>
                                    <div className={style.title}>
                                        {item.title}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) || <div className="empty l-full l-box-center">加载中...</div>}
                </div>

            </div>

        </div>
    );
};
Scroll.propTypes = {
    stat: P.shape({abc: P.any, newsList: P.array}).isRequired,
};
export default connect(state => ({stat: state[store.ns]}))(Scroll);
