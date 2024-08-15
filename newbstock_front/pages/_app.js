import React, { useState, useEffect } from 'react';
import CommonLayer from '../components/layout/CommonLayer';
import InnerWrapper from '../components/layout/InnerWrapper';
import ContentsLayer from '../components/layout/ContentsLayer';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../styles/global.css'

const App = ({ Component, pageProps }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <CommonLayer>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Header />
                <div style={{ display: 'flex', flex: 1 }}>
                    <SideBar />
                    <InnerWrapper>    
                        <Component {...pageProps} isClient={isClient} />
                    </InnerWrapper>
                </div>
            </div>
        </CommonLayer>
    );
};

export default App;
