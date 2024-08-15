import React from 'react';
import styles from './Layout.module.css';

function InnerWrapper(props) {
    return (
        <div className={styles.wrap}>
            {props.children}
        </div>
    );
}

export default InnerWrapper
