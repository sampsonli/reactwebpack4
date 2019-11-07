import React from 'react';
import { Switch, Route } from 'react-router-dom';
import P from 'prop-types';
import load from '../../common/load';

const Scroll = load(() => import('./pages/scroll'));

const Demo = ({match}) => (
    <Switch>
        <Route path={`${match.url}/scroll`} component={Scroll} />
    </Switch>
);
Demo.propTypes = {
    match: P.shape({url: P.string}).isRequired,
};
export default Demo;
