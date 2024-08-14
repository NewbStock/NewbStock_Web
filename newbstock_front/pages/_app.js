import React from 'react';
import CommonLayer from '../components/layout/CommonLayer';
import InnerWrapper from '../components/layout/InnerWrapper';
import ContentsLayer from '../components/layout/ContentsLayer';
import Header from '../components/Header/Header'
import '../styles/global.css'


const App = () => {
    return (
        <CommonLayer>
            <Header />
            <InnerWrapper>
                {/* 사이드바 */}
                <ContentsLayer>
                    {/* 컨텐츠 */}
                </ContentsLayer>
            </InnerWrapper>
        </CommonLayer>
    );
};

export default App;
