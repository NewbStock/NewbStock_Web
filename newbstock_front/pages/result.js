import React, { useState } from 'react';
import ContentsLayer from '../components/layout/ContentsLayer';
import styles from '../styles/result.module.css'


const Calculator = () => {
    const [stock, setStock] = useState('삼성전자');
    const [initialInvestment, setInitialInvestment] = useState('1000000');
    const [initialDate, setInitialDate] = useState('2020-01-01');
    const [regularInvestment, setRegularInvestment] = useState('100000');
    const [investmentCycle, setInvestmentCycle] = useState('monthly');
    const [result, setResult] = useState(true);
    const [showResult, setShowResult] = useState(true);
    
    const recommendedStocks = ['삼성전자', 'SK하이닉스', 'LG에너지솔루션'];
    const recommendedAmounts = [50000, 100000, 1000000];

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you would handle the form submission, potentially calling an API or performing calculations
        console.log({ stock, initialInvestment, initialDate, regularInvestment, investmentCycle });
 
        const formData = {
            country: 'kr',
            company: stock,
            initial_amount: parseInt(initialInvestment),
            initial_date: initialDate,
            additional_amount: regularInvestment ? parseInt(regularInvestment) : 0,
            frequency: investmentCycle
        };

        // API 호출
        fetch('http://localhost:8000/profit/submit-data/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            // 응답 데이터 처리
            setResult(data);
            setShowResult(true);
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    const handleRecommendedStockClick = (recommendedStock) => {
        setStock(recommendedStock);
    };

    const handleRecommendedAmountClick = (amount) => {
        setInitialInvestment(amount);
    };

    return (
            <ContentsLayer>
                {showResult ? (  // 조건부 렌더링을 통해 결과 페이지를 보여줌
                    <div className={styles.resultcontainer}>
                        <h1>Investment Results</h1>
                        <div className={styles.resultcontentcontainer}>
                            <h3></h3>
                            <p>Company: {result.company}</p>
                            <p>Initial Amount: {result.initial_amount}</p>
                            <p>Initial Date: {result.initial_date}</p>
                            <p>Additional Amount: {result.additional_amount}</p>
                            <p>Frequency: {result.frequency}</p>
                            <p>총 보유 주식 수: {result.total_shares}</p>
                            <p>총 투자금: {result.total_investment}</p>
                            <p>전체 손익금: {result.total_profit_loss}</p>
                            <button onClick={() => setShowResult(false)}>다시 계산하기</button>
                        </div>
                    </div>
            ) : (
             <div className={styles.calcontainer}>
                <h1 className={styles.h1}>만약 그 때 샀다면... 내 수익률은?</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="stock">1. 종목 선택하기</label>
                        <div className={styles.stockInputContainer}>
                            <input
                                className={styles.input}
                                type="text"
                                id="stock"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                required
                            />
                            <div className={styles.recommendedStocks}>
                                {recommendedStocks.map((recommendedStock, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className={styles.recommendedStockButton}
                                        onClick={() => handleRecommendedStockClick(recommendedStock)}
                                    >
                                        {recommendedStock}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="initialInvestment">2. 최초 투자 금액 설정하기</label>
                        <div className={styles.priceInputContainer}>
                            <input
                                className={styles.input}
                                type="number"
                                id="initialInvestment"
                                value={initialInvestment}
                                onChange={(e) => setInitialInvestment(e.target.value)}
                                required
                            />
                             <div className={styles.recommendedAmounts}>
                                {recommendedAmounts.map((amount, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className={styles.recommendedAmountButton}
                                        onClick={() => handleRecommendedAmountClick(amount)}
                                    >
                                        {amount.toLocaleString()}원
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="initialDate">3. 최초 투자 날짜 선택하기</label>
                        <input
                            className={styles.input}
                            type="date"
                            id="initialDate"
                            value={initialDate}
                            onChange={(e) => setInitialDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="regularInvestment">+ 추가 선택: 정기 분할 매수 투자금</label>
                        <input
                            className={styles.input}
                            type="number"
                            id="regularInvestment"
                            value={regularInvestment}
                            onChange={(e) => setRegularInvestment(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="investmentCycle">투자 주기:</label>
                        <select
                            className={styles.select}
                            id="investmentCycle"
                            value={investmentCycle}
                            onChange={(e) => setInvestmentCycle(e.target.value)}
                        >
                            <option value="weekly">매주</option>
                            <option value="biweekly">격주</option>
                            <option value="monthly">매달</option>
                            <option value="bimonthly">격달</option>
                        </select>
                    </div>
                    <button className={styles.button} type="submit">계산하기</button>
                </form>
            </div>
            )}
        </ContentsLayer>

    );
};

export default Calculator;
