import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from 'react-loadable';
import P from 'prop-types';

const Scroll = loadable({ loader: () => import('./pages/scroll'), loading: () => null });
// const Scroll = require('./pages/scroll').default;

const Demo = ({match}) => (
    <Switch>
        <Route path={`${match.url}/scroll`} component={Scroll} />
    </Switch>
);
Demo.propTypes = {
    match: P.shape({url: P.string}).isRequired,
};
export default Demo;
