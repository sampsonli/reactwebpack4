import React from 'react';
import { Switch, Route, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import load from '~/common/load';

import Home from './pages/home';
// import Test from './pages/test';

// console.log(test)

const Home1 = load(() => import('./pages/test'));
// const Test = load(() => import('./pages/test'));

export default () => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.url}/home`} component={Home1} />
            {/*<Route path={`${match.url}/test`} component={Test} />*/}
        </Switch>
    );
};
