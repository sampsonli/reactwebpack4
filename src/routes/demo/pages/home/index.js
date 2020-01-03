import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom';
import style from './style.less';
import model from '../../models';

const Home = () => {
    const data = model.useData();
    const location = useLocation();
    useEffect(() => {
        model.getTime();
    }, [location.search]);
    return (
        <div className={style.container}>
            <div className={style.content}>
                2020年-
                {(data.time)}
            </div>

        </div>
    );
};
Home.propTypes = {
    history: PropTypes.shape({push: PropTypes.func}).isRequired,
};
export default Home;
