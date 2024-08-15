import React from 'react';
import styles from './NewbieContent.module.css';

function NewbieContent() {
    return (
        <ul className={styles.chart_list}>
            <li className={styles.item}>
                <iframe src="" frameborder="0"></iframe>
            </li>
            <li className={styles.item}>
                <iframe src="" frameborder="0"></iframe>
            </li>
        </ul>
    );
}

export default NewbieContent
