import React, {Component} from 'react';
import P from 'prop-types';
import {connect} from 'react-redux';

import store from '../../models/test';
import style from './style.less';

export default @connect(state => ({stat: state[store.ns]}))
class ScrollDemo extends Component {
    static propTypes = {
        stat: P.objectOf(P.any).isRequired,
    }

    componentDidMount() {
        store.getNewList();
    }

    changeColor = () => {
        store.getAbc(Math.floor(Math.random() * 1000));
    }

    render() {
        const {stat} = this.props;
        return (
            <div className={`l-full l-flex-column ${style.wrapper}`}>
                <div className={style.header} onClick={this.changeColor}>
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
    }
}
