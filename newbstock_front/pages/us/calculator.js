import React, { useState, useEffect } from 'react';
import ContentsLayer from '../components/layout/ContentsLayer';
import styles from '../styles/calculator.module.css'


const Calculator = () => {
    const [stock, setStock] = useState('');
    const [initialInvestment, setInitialInvestment] = useState('');
    const [initialDate, setInitialDate] = useState('');
    const [regularInvestment, setRegularInvestment] = useState('');
    const [investmentCycle, setInvestmentCycle] = useState('monthly');
    
    const recommendedStocks = ['삼성전자', 'SK하이닉스', 'LG에너지솔루션'];
    const recommendedAmounts = [50000, 100000, 1000000];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle the form submission, potentially calling an API or performing calculations
        console.log({ stock, initialInvestment, initialDate, regularInvestment, investmentCycle });
    };

    const handleRecommendedStockClick = (recommendedStock) => {
        setStock(recommendedStock);
    };

    const handleRecommendedAmountClick = (amount) => {
        setInitialInvestment(amount);
    };

    return (
            <ContentsLayer>
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
        </ContentsLayer>

    );
};

export default Calculator;
