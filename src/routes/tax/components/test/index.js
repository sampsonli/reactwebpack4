import React, { Component } from 'react';

export default
class App extends Component {
    state = {
        index: 0,
    }
    add() {
        this.setState({index: this.state.index + 1})
    }
    changeColor = () => {
        // const num = Math.random() * 1000000;
        // model.act.getNewsList(num);
        // model.act.getUserInfo(num);
        this.add();
    }

    render() {
        return (
            <div style={{width: 200, height: 200, backgroundColor: 'orange', overflow: 'hidden'}}>
                <div onClick={this.changeColor}>
                    {this.state.index}
                </div>
            </div>
        );
    }
}
