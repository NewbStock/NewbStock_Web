import React, { useEffect, useState } from 'react';
import ContentsLayer from '../components/layout/ContentsLayer';
import styles from '../styles/news.module.css'
import { apis } from '../api/request';

const News = ({ country }) => {
    const [riseData, setRiseData] = useState([]);
    const [dropData, setDropData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const transformedCountry = country === 'us' ? 'en' : country;
                // 상승 종목 데이터 가져오기
                const riseResponse = apis.getUpTicker(country);
                const riseStocks = riseResponse.data;
                console.log(riseStocks)

                // 하락 종목 데이터 가져오기
                const dropResponse = apis.getDownTicker(country);
                const dropStocks = dropResponse.data;

                
                
                // 각 종목에 대한 뉴스 데이터 가져오기
                const riseWithNews = Promise.all(riseStocks.map(async (stock) => {
                    const newsResponse = await apis.getTop3(country, stock.ticker);
                    print(newsResponse.data[0])
                    return { ...stock, news: newsResponse.data[0] };
                }));
                print("riseWithNews", riseWithNews)
                

                print("dropStocks", dropStocks)
                const dropWithNews = await Promise.all(dropStocks.map(async (stock) => {
                    const newsResponse = await apis.getTop3(country, stock.ticker);
                    print(newsResponse.data[0])
                    return { ...stock, news: newsResponse.data[0] };
                }));
                print("dropWithNews", dropWithNews)

                setRiseData(riseWithNews);
                setDropData(dropWithNews);
            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
            }
        };

        fetchData();
    }, [country]);

    const truncateDescription = (description) => {
        return description.length >50 ? description.substring(0, 50) + "..." : description;
    };

    return (
        <ContentsLayer>
            <div className={styles.newscontainer}>
            <h1 className={styles.h1}>실시간 주요 뉴스 TOP3</h1>
                {riseData.map((section, index) => (
                    <div key={index} className={styles.contentscontainer}>
                        <h2>많이 오른 종목 📈</h2>
                        <div className={styles.nncontainer}>
                            {section.stock.map((stock, stockIndex) => (
                                <div key={stockIndex} className={styles.ncontainer}>
                                    <h3>{stockIndex + 1}. {stock.name}</h3>
                                    <div className={styles.risenews} >
                                    <a href={stock.link} className={styles.newsLink} target="_blank" rel="noopener noreferrer">
                                        <h4 className={styles.headline}>{stock.title}</h4>
                                        <p className={styles.description}>{truncateDescription(stock.description)}</p>
                                        <br />
                                        <p className={styles.date}>{stock.pubDate.slice(0, -9)}</p>
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
                                        <h4 className={styles.headline}>{stock.title}</h4>
                                        <p className={styles.description}>{truncateDescription(stock.description)}</p>
                                        <br />
                                        <p className={styles.date}>{stock.pubDate.slice(0, -9)}</p>
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