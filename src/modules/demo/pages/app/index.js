import React, { Component } from 'react';
import P from 'prop-types';
import { connect } from 'react-redux';

import Scroll from '~/common/scroll';

import style from './style.css';
import action from '../../models/test';

export default
@connect(state => ({ stat: state.test }))
class App extends Component {
    static propTypes = {
        stat: P.objectOf(P.any).isRequired,
    }
    componentDidMount() {
        const wrapper = document.querySelector('#wrapper');
        const target = document.querySelector('#target');
        const wheight = wrapper.offsetHeight;
        const cHeight = target.offsetHeight;

        target.style.willChange = 'transform';
        const scroller = new Scroll((left, top) => {
            // target.style.transform = `translate3d(0, ${-top}px, 1)`;
            if (typeof target.style.transform !== 'undefined') {
                target.style.transform = `translateY(${-top}px) translateZ(0)`;
            } else {
                target.style.webkitTransform = `translateY(${-top}px) translateZ(0)`;
            }
        }, {
            scrollingX: false,
            scrollingY: true,
            animating: true,
            bouncing: false,
            frictionFactor: 0.96,
        })
        scroller.setDimensions(100, wheight, 100, cHeight);
        wrapper.addEventListener('touchstart', (e) => {
            scroller.doTouchStart(e.touches, e.timeStamp);
            e.preventDefault();
        });
        wrapper.addEventListener('touchmove', (e) => {
            scroller.doTouchMove(e.touches, e.timeStamp);
            e.preventDefault();
        });
        wrapper.addEventListener('touchend', (e) => {
            scroller.doTouchEnd(e.timeStamp);
            e.preventDefault();
        });
    }


    changeColor = () => {
        const num = Math.random() * 1000000;
        action.getUserInfo(num);
    }

    render() {
        const {stat} = this.props;
        return (
            <div className="l-full l-flex-column">
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
