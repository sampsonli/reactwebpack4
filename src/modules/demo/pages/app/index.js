import React, { Component } from 'react';
import P from 'prop-types';
import { connect } from 'react-redux';
// import classNames from 'classnames';
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
                <header className={style.header} onClick={this.changeColor}>
                    我爱你
                </header>
                <div className="l-flex-1 l-relative">
                    <div className="l-full" style={{backgroundColor: stat.color}}>
                        <div className={style.title}>
                            hello world
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
