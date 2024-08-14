import React, { useState, useEffect } from 'react';
import CommonLayer from '../components/layout/CommonLayer';
import InnerWrapper from '../components/layout/InnerWrapper';
import ContentsLayer from '../components/layout/ContentsLayer';
import Header from '../components/Header/Header'
import SideBar from '../components/SideBar/SideBar'
import styles from './calculator.module.css'


const Calculator = () => {
    return (
        <CommonLayer>
            <Header />
            <InnerWrapper>
                <div style={{ display: 'flex' }}>
                    <SideBar />
                    <ContentsLayer>
                    <div className="container">
                        <h1>만약 그 때 샀다면... 내 수익률은?</h1>
                    </div>
                    </ContentsLayer>
                </div>
            </InnerWrapper>
        </CommonLayer>
    );
};

export default Calculator;
