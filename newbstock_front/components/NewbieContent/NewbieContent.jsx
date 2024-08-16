import React from 'react';
import styles from './NewbieContent.module.css';

function NewbieContent() {
    return (
        <ul className={styles.chart_list}>
            <li className={styles.item}>
                <iframe
                    src="http://43.202.160.91:8808/explore/?standalone=1&slice_id=1"
                    frameborder="0"
                    className={styles.chart}
                >
                </iframe>
            </li>
            <li className={styles.item}>
                <iframe src="" frameborder="0" className={styles.chart}></iframe>
            </li>
        </ul>
    );
}

export default NewbieContent
