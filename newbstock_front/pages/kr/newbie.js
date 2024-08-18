import React, { useState, useEffect } from 'react';
import ContentsLayer from '../../components/layout/ContentsLayer';
import NewbieContent from '../../components/NewbieContent/NewbieContent';
import styles from '../../styles/newbie.module.css';

const Calculator = () => {
    const [RateChange, setRateChange] = useState('monthly');

    return (
        <ContentsLayer>
            <h2 className={styles.content_title}>주식 초보자들이 알면 좋은 지식!</h2>
            <div className={styles.desc_box}>
                <p className={styles.desc}>
                    초급에는 주식을 왜 해야하는가?, 주식이란?, 주식 시장의 흐름, 주식 투자와 거래 방법 등<br />
                    중급에는 주식이 영향을 받는것과 미치는것, 코인, 채권, 지수, 재무제표, 투자자의 마인드 등
                </p>
            </div>
            <ul className={styles.category_list}>
                <li className={styles.item}>
                    <div className={styles.title_area}>
                        <strong className={styles.title}>현재 시총 top3</strong>
                    </div>
                    <NewbieContent />
                </li>
                <li className={styles.item}>
                    <div className={styles.title_area}>
                        <strong className={styles.title}>변동률 10% 이상이였던 날</strong>
                        <select
                            className={styles.select}
                            id="RateChange"
                            value={RateChange}
                            onChange={(e) => setRateChange(e.target.value)}
                        >
                            <option value="stock">주식</option>
                            <option value="biweekly">KOSPI 지수</option>
                            <option value="exchange_rate">환율</option>
                            <option value="news">뉴스심리지수</option>
                            <option value="interest">금리지수</option>
                        </select>
                    </div>
                    <NewbieContent />
                </li>
            </ul>
        </ContentsLayer>
    );  
};  

export default Calculator;
