import React from 'react';
import styles from './Layout.module.css';

function ContentsLayer(props) {
    return (
        <section className={styles.content}>
            {props.children}
        </section>        
    );
}

export default ContentsLayer
