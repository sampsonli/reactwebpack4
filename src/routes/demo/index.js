import React from 'react';
import { Switch, Route } from 'react-router-dom';
import P from 'prop-types';
import load from '~/common/load';


const Home = load(() => import('./pages/home'));


const Demo = ({match}) => (
    <Switch>
        <Route path={`${match.url}/home`} component={Home} />
    </Switch>
);

Demo.propTypes = {
    match: P.shape({url: P.string}).isRequired,
};

export default Demo;
