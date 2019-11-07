import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import P from 'prop-types';
import load from '../../common/load';

const Search = load(() => import('./pages/Search'));
const Detail = load(() => import('./pages/Detail'));

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
