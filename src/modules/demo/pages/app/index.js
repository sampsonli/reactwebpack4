import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import classNames from 'classnames';
import P from 'prop-types';
import logo from '../../assets/logo.svg';

// @connect(state => ({ stat: state.demo }))
export default class App extends Component {
    static propTypes = {
        stat: P.string.isRequired,
    }

    render() {
        const {stat} = this.props;
        return (
            <div className="l-full l-flex-column">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />

                </header>
                <div className="l-flex-1">
                    <p>
                        hello world
                        {stat}
                    </p>
                    <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                Learn React1
                    </a>
                </div>
            </div>
        );
    }
}
