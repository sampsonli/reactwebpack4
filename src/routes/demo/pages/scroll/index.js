import React, {useEffect} from 'react';
import P from 'prop-types';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';

import model from '../../models/demoModel';
import style from './style.less';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Scroll = ({data}) => {
    const location = useLocation();
    const query = useQuery();
    useEffect(() => {
        model.getNewList();
    }, [location.search]);
    return (
        <div className={`l-full l-flex-column ${style.wrapper}`}>
            <div className={style.header} onClick={() => model.changeAbc(model.abc + 4)}>
                <span>
                        新闻头条-
                    {data.abc}
--
                    {query.get('a')}
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
    data: P.objectOf(P.any).isRequired,
};
export default connect(state => ({data: state[model.ns]}))(Scroll);
