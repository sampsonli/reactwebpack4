import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
const modules = [];
((r) => {
    r.keys().forEach((key) => {
        const md = {component: r(key).default, path: '/' + key.split('/')[2]};
        modules.push(md);
    });
})(require.context('./', true, /\.\/modules\/[^\/]+\/index\.js$/)); // eslint-disable-line
require.context('./', true, /^\.\/(common|components).*\.js$/);

export default () => {
    return (<Router>
        <Switch>
            { modules.map(r => <Route key={r.path} component={r.component} path={r.path}/> )}
        </Switch>
    </Router>)
}
