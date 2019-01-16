import React, { Component } from 'react';
import P from 'prop-types';
import { connect } from 'react-redux';
// import classNames from 'classnames';
import {NS} from '../../actions/types';
import './style.css';
import '../../reducer';

import * as actions from '../../actions';

import logo from '../../assets/logo.svg';

// @connect(state => ({ state: state.demo_ }))
class App extends Component {
    static propTypes = {
        state: P.objectOf(P.any).isRequired,
        changeRed: P.func.isRequired,
    }

    render() {
        const {state, changeRed} = this.props;
        return (
            <div className="l-full l-flex-column">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />

                </header>
                <div className="l-flex-1">
                    <div style={{backgroundColor: state.color}} onClick={changeRed}>
                        hello world
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(state => ({ state: state[NS] }), actions)(App);
