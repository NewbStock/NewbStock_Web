import React from 'react';
import styles from './NewbieContent.module.css';

function NewbieContent() {
    return (
        <ul className={styles.chart_list}>
            <li className={styles.item}>
                <iframe
                    src="http://127.0.0.1:8808/explore/?standalone=1&slice_id=200"
                    frameBorder="0"
                    className={styles.chart}
                >
                </iframe>
            </li>
            <li className={styles.item}>
                <iframe src="" frameBorder="0" className={styles.chart}></iframe>
            </li>
        </ul>
    );
}

export default NewbieContent
