import React, { Component } from 'react';
import P from 'prop-types';
import { connect } from 'react-redux';
// import classNames from 'classnames';
import IScroll from '~/common/iscroll';
import model from '../../models/test';
import style from './style.less';

export default
@connect(state => ({ stat: state[model.ns] }))
class ScrollDemo extends Component {
    static propTypes = {
        stat: P.objectOf(P.any).isRequired,
    }

    constructor(args) {
        super(args);
        const {stat: {newsList}} = this.props;
        if (!newsList) {
            model.act.getNewsList(11).then(() => {
                setTimeout(() => {
                    this.initScroll();
                }, 16.7);
            });
        }
    }


    componentDidMount() {
        this.initScroll();
    }

    initScroll = () => {
        const wrapper = document.querySelector('#wrapper');
        if (wrapper) {
            this.scroll = new IScroll(wrapper, {
                disableMouse: false,
                bounce: true,
                preventDefault: false,
                // useTransition: false,
                deceleration: 0.001,
            });
        }
    }

    changeColor = () => {
        // model.act.getUserInfo(123);
        // model.mt.changeAbc('hello');
        model.act.getUserInfo(333);
    }

    jumpUrl = (url) => {
        window.location.href = url;
    }

    render() {
        const {stat} = this.props;
        return (
            <div className={`l-full l-flex-column ${style.wrapper}`}>
                <div className={style.header} onClick={this.changeColor}>
                    <span>新闻头条-{stat.abc}</span>
                </div>
                <div className="l-flex-1 l-relative">
                    <div className="l-full" id="wrapper">
                        {stat.newsList
                            && (
                                <ul className={style.list} id="target">
                                    {stat.newsList.map(item => (
                                        <li onClick={() => this.jumpUrl(item.url)} key={item.uniquekey} className={style.item}>
                                            <div className={style.title}>
                                                {item.title}
                                                <br />
                                                {item.date}
                                            </div>
                                            <div className={style.imgct}><img alt="" src={item.thumbnail_pic_s} /></div>

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
