import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from 'react-loadable';
import P from 'prop-types';

const App = loadable({ loader: () => import('./pages/app'), loading: () => null });
const Scroll = loadable({ loader: () => import('./pages/scroll'), loading: () => null });
const Mtest = loadable({ loader: () => import('./pages/mtest'), loading: () => null });

export default class Demo extends Component {
    static propTypes = {
        match: P.shape({url: P.string}).isRequired,
    }

    render() {
        const { match } = this.props;
        return (
            <Switch>
                <Route path={`${match.url}/app`} component={App} />
                <Route path={`${match.url}/scroll`} component={Scroll} />
                <Route path={`${match.url}/mtest`} component={Mtest} />
            </Switch>
        );
    }
}
