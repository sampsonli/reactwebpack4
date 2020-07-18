import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import load from '~/common/load';

const Home = load(() => import('./pages/home'));
const Konva = load(() => import('./pages/konva'));
const Scroll = load(() => import('./pages/scroll'));

export default () => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.url}/home`} component={Home} />
            <Route path={`${match.url}/konva`} component={Konva} />
            <Route path={`${match.url}/scroll`} component={Scroll} />
        </Switch>
    );
};
