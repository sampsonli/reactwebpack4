import React, { Component } from 'react';
import P from 'prop-types';
import { connect } from 'react-redux';

import Scroll from '~/common/scroll';

import style from './style.css';
import model from '../../models/test';

export default
@connect(state => ({ stat: state[model.ns] }))
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
        });
        let types = ['pointerdown', 'pointermove', 'pointerup', 'pointercancel'];
        if (!window.PointerEvent) {
            types = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        }
        scroller.setDimensions(100, wheight, 100, cHeight);
        // wrapper.addEventListener('touchstart', (e) => {
        wrapper.addEventListener(types[0], (e) => {
            scroller.doTouchStart(e.touches || [e], e.timeStamp);
            e.preventDefault();
        });
        // wrapper.addEventListener('touchmove', (e) => {
        wrapper.addEventListener(types[1], (e) => {
            scroller.doTouchMove(e.touches || [e], e.timeStamp);
            e.preventDefault();
        });
        // wrapper.addEventListener('touchend', (e) => {
        wrapper.addEventListener(types[2], (e) => {
            scroller.doTouchEnd(e.timeStamp);
            e.preventDefault();
        });
        // wrapper.addEventListener('touchend', (e) => {
        wrapper.addEventListener(types[3], (e) => {
            scroller.doTouchEnd(e.timeStamp);
            e.preventDefault();
        });
    }


    changeColor = () => {
        const num = Math.random() * 1000000;
        model.getUserInfo(num);
    }

    render() {
        const {stat} = this.props;
        return (
            <div className="l-full l-flex-column">
                <div className={style.header} onClick={this.changeColor}>
                    {stat.abc}
                </div>
                <div className="l-flex-1 l-relative">
                    <div className="l-full" style={{overflow: 'hidden'}} id="wrapper">
                        <ul className={style.list} id="target">
                            <li className={style.item}>100004444444444444400000000</li>
                            <li className={style.item}>uuuuuuuuuu</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>111111111111111</li>
                            <li className={style.item}>1111111555111111</li>
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
