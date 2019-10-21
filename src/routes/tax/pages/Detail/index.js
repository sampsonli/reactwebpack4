import React, {useEffect} from 'react';

import {observer} from 'mobx-react';
import style from './style.less';
import store from '../../store/mainStore';

export default observer(({location}) => {
    useEffect(() => {
        const keyno = location.search.split('keyno=')[1].split('&')[0];
        store.getTaxDetail({keyno});
        return () => {
            store.detail = null;
        };
    }, [location.search]);
    const {detail} = store;
    return (
        <div className={`l-full l-flex-column ${style.wrapper}`}>
            <div className={style.header}>
                <span>
                        发票抬头信息详情
                </span>
            </div>
            <div className="l-flex-1 l-relative">
                <div className="l-full l-scroll-y" id="wrapper">
                    {detail && (
                        <ul className={style.infos}>
                            <li className={style.info_item}>
                                <span className={style.info_key}>公司名称：</span>
                                {detail.Name}
                            </li>
                            <li className={style.info_item}>
                                <span className={style.info_key}>公司地址：</span>
                                {detail.Address}
                            </li>
                            <li className={style.info_item}>
                                <span className={style.info_key}>纳税人识别号：</span>
                                {detail.CreditCode}
                            </li>
                            <li className={style.info_item}>
                                <span className={style.info_key}>开户行：</span>
                                {detail.Bank}
                            </li>
                            <li className={style.info_item}>
                                <span className={style.info_key}>开户行账号：</span>
                                {detail.Bankaccount}
                            </li>
                            <li className={style.info_item}>
                                <span className={style.info_key}>联系方式：</span>
                                {detail.PhoneNumber}
                            </li>


                        </ul>
                    )}
                </div>

            </div>

        </div>
    );
});
