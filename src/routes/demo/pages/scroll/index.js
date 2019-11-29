import React, {useEffect} from 'react';
import P from 'prop-types';
import {connect} from 'react-redux';

import model from '../../models/demoModel';
import style from './style.less';

const Scroll = ({data}) => {
    useEffect(() => {
        data.newsList || model.getNewList();
    }, []);
    return (
        <div className={`l-full l-flex-column ${style.wrapper}`}>
            <div className={style.header} onClick={() => model.getAbc()}>
                <span>
                        新闻头条-
                    {data.abc}
                </span>
            </div>
            <div className="l-flex-1 l-relative">
                <div className="l-full" id="wrapper">
                    {data.newsList
                    && (
                        <ul className={style.list} id="target">
                            {data.newsList.map(item => (
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
    data: P.shape({abc: P.any, newsList: P.array}).isRequired,
};
export default connect(state => ({data: state[model.ns]}))(Scroll);
