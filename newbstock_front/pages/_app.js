import React, { useState, useEffect } from 'react';
import CommonLayer from '../components/layout/CommonLayer';
import InnerWrapper from '../components/layout/InnerWrapper';
import ContentsLayer from '../components/layout/ContentsLayer';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SideBar from '../components/SideBar/SideBar';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <CommonLayer>
            <Header />
            <SideBar />
            <InnerWrapper>    
                <Component {...pageProps} isClient={isClient} />
                <Footer />
            </InnerWrapper>
        </CommonLayer>
    );
};

export default App;
