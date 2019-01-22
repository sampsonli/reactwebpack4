import React, { Component } from 'react';
import P from 'prop-types';
import { connect } from 'react-redux';
// import classNames from 'classnames';
// import {Scroller} from 'scroll-accelerate';
import Scroller from '~/common/scroll';

import {NS} from '../../actions/types';
import style from './style.css';
import '../../reducer';

import * as actions from '../../actions';

export default
@connect(state => ({ stat: state[NS] }), actions)
class App extends Component {
    static propTypes = {
        stat: P.objectOf(P.any).isRequired,
        changeOra: P.func.isRequired,
        changeBlue: P.func.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            flag: true,
        };
    }

    componentDidMount() {
        const wrapper = document.querySelector('#wrapper');
        const target = document.querySelector('#target');
        const wheight = wrapper.offsetHeight;
        const cHeight = target.offsetHeight;

        const scroller = new Scroller((left, top) => {
            // target.style.transform = `translate3d(0, ${-top}px, 1)`;
            target.style.transform = `translateY(${-top}px) translateZ(0)`;
        }, {
            scrollingX: false,
            scrollingY: true,
            animating: true,
            bouncing: false,
            speedMultiplier: 1,
            animationDuration: 10,
            penetrationDeceleration: 0.001,
            scrollingComplete() {
                console.log('compelete');
            },
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
        const {changeBlue, changeOra} = this.props;
        const {flag} = this.state;
        if (flag) {
            changeOra();
        } else {
            changeBlue();
        }
        this.setState({
            flag: !flag,
        });
    }

    render() {
        const {stat} = this.props;
        return (
            <div className="l-full l-flex-column">
                <div className={style.header}>
                    demo
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
                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}
