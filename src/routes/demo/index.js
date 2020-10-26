import React from 'react';
import { Switch, Route, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import load from '~/common/load';
// import Home from './pages/home';
// import Test from './pages/test';

const Home = load(() => import('./pages/home'));
const Test = load(() => import('./pages/test'));

export default () => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.url}/home`} component={Home} />
            <Route path={`${match.url}/test`} component={Test} />
        </Switch>
    );
};


