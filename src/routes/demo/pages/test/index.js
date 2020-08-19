import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import style from './style.less';

import HomeModel from '../../models/HomeModel';

class Test extends Component {
  render() {
    const {
      model,
    } = this.props;
    const {result, user} = model;
    return (
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.txt} onClick={model.drawLottery}>
            开始摇奖
          </div>

          <div className={style.txt} onClick={model.changeName}>
            {user.name}
          </div>

          <div className={style.txtTest}>
            开奖号码：
            {result}
          </div>

        </div>

      </div>
    );
  }
}

Test.propTypes = {
  model: PropTypes.instanceOf(HomeModel).isRequired,
};

export default connect(state => ({model: state[HomeModel.ns]}))(Test);
