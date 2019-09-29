import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from 'react-loadable';
import P from 'prop-types';

// const App = loadable({ loader: () => import('./pages/app'), loading: () => null });
const Search = loadable({ loader: () => import('./pages/Search'), loading: () => null });
const Detail = loadable({ loader: () => import('./pages/Detail'), loading: () => null });

class Tax extends Component {
    render() {
        const { match } = this.props;
        return (
            <Switch>
                <Route path={`${match.url}/search`} component={Search} />
                <Route path={`${match.url}/detail`} component={Detail} />
            </Switch>
        );
    }
}
Tax.propTypes = {
    match: P.shape({url: P.string}).isRequired,
}
export default Tax;
