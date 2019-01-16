import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from 'react-loadable';
import PropTypes from 'prop-types';
import Loading from './components/Loading';


const App = loadable({ loader: () => import('./pages/app'), loading: Loading });

export default class Demo extends Component {
    static propTypes = {
        match: PropTypes.objectOf({url: PropTypes.string}).isRequired,
    }

    render() {
        const { match } = this.props;
        return (
            <div className="l-full">
                <Switch>
                    <Route path={`${match.url}/app`} component={App} />
                </Switch>
            </div>
        );
    }
}
