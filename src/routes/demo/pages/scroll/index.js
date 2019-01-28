import React, { Component } from 'react';
import P from 'prop-types';
import { connect } from 'react-redux';
// import classNames from 'classnames';
// import {Scroller} from 'scroll-accelerate';
import IScroll from '~/common/iscroll';
import action, {ns} from '../../models/test';
import style from './style.css';


export default
@connect(state => ({ stat: state[ns] }))
class ScrollDemo extends Component {
    static propTypes = {
        stat: P.objectOf(P.any).isRequired,
    }


    componentDidMount() {
        const wrapper = document.querySelector('#wrapper');
        const scroll = new IScroll(wrapper, {
            disableMouse: false,
            bounce: true,
            // useTransition: false,
            deceleration: 0.001,
        });
        console.log(scroll);
    }

    changeColor = () => {
        const num = Math.random() * 1000000;
        action.getUserInfo(num);
    }

    render() {
        const {stat} = this.props;
        return (
            <div className={`l-full l-flex-column ${style.wrapper}`}>
                <div className={style.header} onClick={this.changeColor}>
                    {stat.abc}
                </div>
                <div className="l-flex-1 l-relative">
                    <div className="l-full" id="wrapper">
                        <ul className={style.list} id="target">
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}
