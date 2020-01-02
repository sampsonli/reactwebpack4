import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {useLocation} from 'react-router-dom';
import style from './style.less';
import model from '../../models';

const Home = () => {
    const data = model.useData();
    // const data2 = model.useData();
    const location = useLocation();
    useEffect(() => {
        model.getTime();
    }, [location.search]);
    return (
        <div className={style.container}>
            <div className={style.content}>
                {(data.loading && 'loading') || moment(data.time).format('新年好 HH:mm:ss')}
            </div>

        </div>
    );
};
Home.propTypes = {
    history: PropTypes.shape({push: PropTypes.func}).isRequired,
};
export default Home;
