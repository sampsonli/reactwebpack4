import React, {useState, useEffect} from 'react';

import {observer} from 'mobx-react';
import style from './style.less';
import store from '../../store/mainStore';

export default observer(({history}) => {
    const [key, setKey] = useState('');
    useEffect(() => {
    }, []);
    return (
        <div className={`l-full l-flex-column ${style.wrapper}`}>
            <div className={style.header}>
                <span>
                        发票抬头信息查询
                </span>
            </div>
            <div className={style.user_input}>
                <input value={key} placeholder="请输入要查找的公司名字" onChange={(e) => setKey(e.target.value)} />
                <button onClick={() => store.getCompList({key})}>查询</button>
            </div>
            <div className="l-flex-1 l-relative">
                <div className="l-full l-scroll-y" id="wrapper">
                    {store.list && (
                        <ul className={style.comp_list}>
                            {store.list.map(item => (
                                <li key={item.KeyNo} className={style.comp_item} onClick={() => history.push({pathname: 'detail', search: `keyno=${item.KeyNo}`})}>
                                    <div className={style.comp_name} dangerouslySetInnerHTML={{__html: item.Name}} />
                                    <div>
                                        <span>联系方式：</span>
                                        {item.ContactNumber}
                                    </div>
                                    <div>
                                        <span>地址：</span>
                                        {item.Address}
                                    </div>
                                </li>
                            ))}

                        </ul>
                    )}
                </div>

            </div>

        </div>
    );
});
