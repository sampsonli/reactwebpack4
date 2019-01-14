import {Component} from "react";
import logo from "./assets/logo.svg";
import React from "react";

export default class Demo extends Component {
    render() {
        return (
            <div className="l-full l-flex-column">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <div className="l-flex-1">
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </div>
            </div>
        );
    }
}
