import React, {Component} from 'react';
import P from 'prop-types';

import {observer} from 'mobx-react';
import style from './style.less';
import demo from '../../models/demo';

export default
@observer
class ScrollDemo extends Component {
    static propTypes = {
        location: P.shape({search: P.string}).isRequired,
        history: P.shape({replace: P.func, push: P.func}).isRequired,
    }

    componentDidMount() {
        const {location, history} = this.props;
        console.log(location);
        console.log(history);
    }

    render() {
        return (
            <div className={`l-full l-flex-column ${style.wrapper}`}>
                <div className={style.header} onClick={demo.setFriend.bind(demo)}>
                    <span>
                        新闻头条-333--
                        {demo.age}
                    </span>
                </div>
                <div className="l-flex-1 l-relative" onClick={demo.changeFriendName.bind(demo)}>
                    <div className="l-full" id="wrapper">
                        {demo.friend && (
                            <div>
                        name:
                                {demo.friend.name}
                                <br />
                        age:
                                {demo.friend.age}
                            </div>
                        )}
                    </div>

                </div>

            </div>
        );
    }
}
