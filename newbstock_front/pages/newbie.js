import React, { useState, useEffect } from 'react';
import { apis } from '../api/request';  // Axios 설정을 불러옵니다
import ContentsLayer from '../components/layout/ContentsLayer';
import NewbieContent from '../components/NewbieContent/NewbieContent';
import styles from '../styles/newbie.module.css';
import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';

// Chart.js 스케일 및 플러그인, 요소 등록
Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, LineElement, PointElement);

const Newbie = () => {
    const [kospiData, setKospiData] = useState(null);
    const [exchangeData, setExchangeData] = useState(null);
    const [interestRateData, setInterestRateData] = useState(null);
    const [newsSentimentData, setNewsSentimentData] = useState(null);

    useEffect(() => {
        const date = '2022-05-02';

        // KOSPI 데이터 가져오기
        apis.getKospiDataByDate(date)
            .then(response => {
                const data = response.data;
                const formattedData = {
                    labels: data.dates,
                    datasets: [
                        {
                            label: 'KOSPI',
                            data: data.kospi,
                            borderColor: 'rgb(75, 192, 192)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            tension: 0.1,
                        },
                        {
                            label: 'KOSDAQ',
                            data: data.kosdaq,
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            tension: 0.1,
                        }
                    ],
                };
                setKospiData(formattedData);
            })
            .catch(error => {
                console.error("Error fetching KOSPI data:", error);
            });

        // 환율 데이터 가져오기
        apis.getExchangeDataByDate(date)
            .then(response => {
                const data = response.data;
                const formattedData = {
                    labels: data.dates,
                    datasets: [
                        {
                            label: '100엔',
                            data: data.yen_100,
                            borderColor: 'rgb(255, 159, 64)',
                            backgroundColor: 'rgba(255, 159, 64, 0.2)',
                            tension: 0.1,
                        },
                        {
                            label: '달러',
                            data: data.dollar,
                            borderColor: 'rgb(54, 162, 235)',
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            tension: 0.1,
                        },
                        {
                            label: '위안',
                            data: data.yuan,
                            borderColor: 'rgb(75, 192, 192)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            tension: 0.1,
                        }
                    ],
                };
                setExchangeData(formattedData);
            })
            .catch(error => {
                console.error("Error fetching exchange data:", error);
            });

        // 금리 데이터 가져오기
        apis.getInterestRatesDataByDate(date)
            .then(response => {
                const data = response.data;
                const formattedData = {
                    labels: data.dates,
                    datasets: [
                        {
                            label: '10년 국채',
                            data: data.treasury_10y,
                            borderColor: 'rgb(153, 102, 255)',
                            backgroundColor: 'rgba(153, 102, 255, 0.2)',
                            tension: 0.1,
                        },
                        {
                            label: '2년 국채',
                            data: data.treasury_2y,
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            tension: 0.1,
                        },
                        {
                            label: 'KORIBOR 12개월',
                            data: data.koribor_12m,
                            borderColor: 'rgb(255, 206, 86)',
                            backgroundColor: 'rgba(255, 206, 86, 0.2)',
                            tension: 0.1,
                        }
                    ],
                };
                setInterestRateData(formattedData);
            })
            .catch(error => {
                console.error("Error fetching interest rates data:", error);
            });

        // 뉴스 심리지수 데이터 가져오기
        apis.getNewsSentimentDataByDate(date)
            .then(response => {
                const data = response.data;
                const formattedData = {
                    labels: data.dates,
                    datasets: [
                        {
                            label: '뉴스 심리지수',
                            data: data.sentiment,
                            borderColor: 'rgb(75, 192, 192)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            tension: 0.1,
                        }
                    ],
                };
                setNewsSentimentData(formattedData);
            })
            .catch(error => {
                console.error("Error fetching news sentiment data:", error);
            });

    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    return (
        <ContentsLayer>
            <div className={styles.newscontainer}>
                <h2 className={styles.pageTitle}>주식 초보자들이 알면 좋은 지식!</h2>
                <div className={styles.contents}>
                    <p>
                        초급에는 주식을 왜 해야하는가?, 주식이란?, 주식 시장의 흐름, 주식 투자와 거래 방법 등<br />
                        중급에는 주식이 영향을 받는 것과 미치는 것, 코인, 채권, 지수, 재무제표, 투자자의 마인드 등
                    </p>
                </div>
                <div className={styles.gridContainer}>
                    <div className={styles.gridItem}>
                        <h3>KOSPI & KOSDAQ</h3>
                        {kospiData && <NewbieContent data={kospiData} options={options} />}
                    </div>
                    <div className={styles.gridItem}>
                        <h3>환율</h3>
                        {exchangeData && <NewbieContent data={exchangeData} options={options} />}
                    </div>
                    <div className={styles.gridItem}>
                        <h3>금리</h3>
                        {interestRateData && <NewbieContent data={interestRateData} options={options} />}
                    </div>
                    <div className={styles.gridItem}>
                        <h3>뉴스 심리지수</h3>
                        {newsSentimentData && <NewbieContent data={newsSentimentData} options={options} />}
                    </div>
                </div>
            </div>
        </ContentsLayer>
    );
};

export default Newbie;
