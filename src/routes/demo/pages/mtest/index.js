import React, { Component } from 'react';
import P from 'prop-types';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import style from './style.css';
import action, {ns} from '../../models/test';

export default
@connect(state => ({ stat: state[ns] }))
class App extends Component {
    static propTypes = {
        stat: P.objectOf(P.any).isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {value: 0}
    }


    componentDidMount() {
    }


    changeColor = () => {
        const num = Math.random() * 1000000;
        action.getUserInfo(num);
    }

    handleChange = (event, value) => {
        this.setState({ value });
    }

    render() {
        const {stat} = this.props;
        return (
            <div className="l-full l-flex-column">
                <Paper square>
                    <Tabs
                        value={this.state.value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={this.handleChange}
                    >
                        <Tab label="Active" />
                        <Tab label="Disabled" disabled />
                        <Tab label="Active" />
                    </Tabs>
                </Paper>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={''} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={''}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <div className="l-flex-1 l-relative">
                    <Button variant="contained" color="primary">
                        你好，世界
                    </Button>




                </div>

                <BottomNavigation
                    value={1111}
                    onChange={() => {}}
                    showLabels
                    className={style.root}
                >
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </BottomNavigation>


            </div>
        );
    }
}
