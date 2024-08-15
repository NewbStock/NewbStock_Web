import React from 'react';
import styles from './Layout.module.css';

function CommonLayer(props) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>        
    );
}

export default CommonLayer
