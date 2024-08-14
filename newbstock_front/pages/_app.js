import React from 'react';
import YouTube from 'react-youtube';
import CommonLayer from '../components/layout/CommonLayer';
import InnerWrapper from '../components/layout/InnerWrapper';
import ContentsLayer from '../components/layout/ContentsLayer';
import Header from '../components/Header/Header'
import SideBar from '../components/SideBar/SideBar'
import styles from '../styles/global.css'


const App = () => {
    return (
        <CommonLayer>
            <Header />
            <InnerWrapper>
                <SideBar/>
                <ContentsLayer>
                    <div className={styles.container}>
                        <div className={styles.videoContainer}>
                            <video className={styles.video} controls muted autoPlay loop>
                                <source src="videos/video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>                           
                        </div>
                        <div className={styles.description}>
                            <h1>Welcome to My Project</h1>
                            <p>
                                This is a brief description of the project. Here, you can explain what your project is about,
                                its features, and any other relevant information you want the users to know.
                            </p>
                        </div>
                    </div>
                </ContentsLayer>
            </InnerWrapper>
        </CommonLayer>
    );
};

export default App;
