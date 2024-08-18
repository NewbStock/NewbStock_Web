import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './NewbieContent.module.css';

function NewbieContent({ data, options }) {
    return (
        <div className={styles.chart_container}>
            <Line data={data} options={options} />
        </div>
    );
}

export default NewbieContent;
