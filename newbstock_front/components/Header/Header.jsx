import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                <a href="#" className={styles.home_link}>
                    <span className="blind">Newbstock</span>
                </a>
            </h1>
            <nav>
                <ul className={styles.country_list}>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>국내</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>미국</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header
