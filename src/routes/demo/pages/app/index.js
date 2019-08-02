import React from 'react';
import { connect } from 'react-redux';
import style from './style.css';
import model from '../../models/test';

export default connect(state => ({state: state[model.ns]}))((args) => {
    const {state} = args;
    return (
        <div className="l-full l-flex-column">
            <div className={style.header} onClick={() => model.act.getUserInfo(state.abc + 1)}>
                {state.abc}
            </div>

            <div className="l-flex-1 l-relative">
                <div className="l-full" style={{overflow: 'hidden'}} id="wrapper">
                    <ul className={style.list} id="target">
                        <li className={style.item}>100004444444444444400000000</li>
                        <li className={style.item}>uuuuuuuuuu</li>
                        <li className={style.item}>111111111111111</li>
                        <li className={style.item}>111111111111111</li>
                        <li className={style.item}>111111111111111</li>
                    </ul>
                </div>

            </div>

        </div>
    )
});
