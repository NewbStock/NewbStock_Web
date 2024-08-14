import React from 'react';
import styles from './Layout.module.css';

function InnerWrapper(props) {
    return (
        <main className={styles.main}>
            {props.children}
        </main>        
    );
}

export default InnerWrapper
