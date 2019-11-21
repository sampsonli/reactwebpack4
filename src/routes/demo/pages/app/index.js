import React from 'react';
import { connect } from 'react-redux';
import style from './style.css';
import store from '../../store/demoStore';

export default connect(state => ({state: state[store.ns]}))(() => (
    <div className="l-full l-flex-column">
        <div className={style.header} onClick={() => store.getAbc(store.abc + 1)}>
            {store.abc}
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
));
