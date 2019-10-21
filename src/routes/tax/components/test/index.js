import React, { Component } from 'react';

export default
class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            index: 0,
        };
    }


    changeColor = () => {
        this.add();
    }

    add() {
        const {index} = this.state;
        this.setState({index: index + 1});
    }

    render() {
        const {index} = this.state;
        return (
            <div style={{
                width: 200, height: 200, backgroundColor: 'orange', overflow: 'hidden',
            }}
            >
                <div onClick={this.changeColor}>
                    {index}
                </div>
            </div>
        );
    }
}
