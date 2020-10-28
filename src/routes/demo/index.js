import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import load from '~/common/load';

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
