import React, { Component } from 'react';
import P from 'prop-types';
import { connect } from 'react-redux';
// import classNames from 'classnames';
import {NS} from '../../actions/types';
import style from './style.css';
import '../../reducer';

import * as actions from '../../actions';

import logo from '../../assets/logo.svg';

export default
@connect(state => ({ state: state[NS] }), actions)
class App extends Component {
    static propTypes = {
        state: P.objectOf(P.any).isRequired,
        changeRed: P.func.isRequired,
        changeBlue: P.func.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            flag: true,
        };
    }


    changeColor = () => {
        const {changeBlue, changeRed} = this.props;
        const {flag} = this.state;
        if (flag) {
            changeRed();
        } else {
            changeBlue();
        }
        this.setState({
            flag: !flag,
        });
    }

    render() {
        const {state} = this.props;
        return (
            <div className="l-full l-flex-column">
                <header className="App-header" onClick={this.changeColor}>
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <div className="l-flex-1 l-relative">
                    <div className="l-full" style={{backgroundColor: state.color}}>
                        <div className={style.title}>
                            hello world
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
