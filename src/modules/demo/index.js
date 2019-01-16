import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from 'react-loadable';
import P from 'prop-types';

const App = loadable({ loader: () => import('./pages/app'), loading: () => null });

export default class Demo extends Component {
    static propTypes = {
        match: P.shape({url: P.string}).isRequired,
    }

    render() {
        const { match } = this.props;
        return (
            <div className="l-full">
                <Switch>
                    <Route path={`${match.url}/app`} component={App} />
                </Switch>
            </div>
        );
    }
}
