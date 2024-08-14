import React from 'react';
import styles from './Header.module.css';


function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>NewbStock</h1>
            <nav></nav>
        </header>
    );
}

export default Header
