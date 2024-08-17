import React from 'react';
import ContentsLayer from '../components/layout/ContentsLayer';
import styles from '../styles/news.module.css'

const News = () => {

    const riseData = [
        {
            stocks: [
                { name: '삼성전자', headline: '신규 반도체 공장 투자 계획 발표', date: '2024.08.17', link: 'https://example.com/news1' },
                { name: 'SK하이닉스', headline: '인공지능 칩 개발 성공', date: '2024.08.17', link: 'https://example.com/news2' },
                { name: 'LG', headline: '차세대 OLED TV 라인업 공개', date: '2024.08.16', link: 'https://example.com/news3' },
            ]
        }
    ]

    const dropData = [
        {
            stocks: [
                { name: '현대차', headline: '글로벌 리콜 발표로 주가 하락', date: '2024.08.17', link: 'https://example.com/news4' },
                { name: 'NAVER', headline: '실적 예상치 하회로 주가 하락', date: '2024.08.16', link: 'https://example.com/news5' },
                { name: '카카오', headline: '규제 우려로 주가 하락세', date: '2024.08.16', link: 'https://example.com/news6' },
            ]
        }
    ];

    return (
        <ContentsLayer>
            <div className={styles.newscontainer}>
            <h1 className={styles.h1}>실시간 주요 뉴스 TOP3</h1>
                {riseData.map((section, index) => (
                    <div key={index} className={styles.contentscontainer}>
                        <h2>많이 오른 종목 📈</h2>
                        <div className={styles.nncontainer}>
                            {section.stocks.map((stock, stockIndex) => (
                                <div key={stockIndex} className={styles.ncontainer}>
                                    <h3>{stockIndex + 1}. {stock.name}</h3>
                                    <div className={styles.risenews} >
                                    <a href={stock.link} className={styles.newsLink} target="_blank" rel="noopener noreferrer">
                                        <h4 className={styles.headline}>{stock.headline}</h4>
                                        <br></br>
                                        <p className={styles.date}>{stock.date}</p>
                                    </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                {dropData.map((section, index) => (
                    <div key={index} className={styles.contentscontainer}>
                        <h2>많이 내린 종목 📉</h2>
                        <div className={styles.nncontainer}>
                            {section.stocks.map((stock, stockIndex) => (
                                <div key={stockIndex} className={styles.ncontainer}>
                                    <h3>{stockIndex + 1}. {stock.name}</h3>
                                    <div className={styles.dropnews}>
                                    <a href={stock.link} className={styles.newsLink} target="_blank" rel="noopener noreferrer">
                                        <h4 className={styles.headline}>{stock.headline}</h4>
                                        <br></br>
                                        <p className={styles.date}>{stock.date}</p>
                                    </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </ContentsLayer>

    )
    
}

export default News;