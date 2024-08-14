import React from 'react';
import styles from './Layout.module.css';

const InnerWrapper = ({ children }) => {
    return (
        <div className={styles.innerwrapper}>
            {children}
        </div>
    );
};

/*
function InnerWrapper(props) {
    return (
        <main className={styles.main}>
            {props.children}
        </main>        
    );
}
*/

export default InnerWrapper;
