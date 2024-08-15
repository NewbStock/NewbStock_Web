import React from 'react';
import styles from './SideBar.module.css'


function SideBar() {
    return (
        <div className={styles.sidebar}>
            <aside className={styles.imageContainer}>
                <a href="/news">
                    <img src="image/news.png" alt="News" className={styles.sidebarImage} />
                </a>

                <a href="/calculator">
                    <img src="image/calculator.png" alt="Calculator" className={styles.sidebarImage} />
                </a>

                <a href="/newbie">
                <img src="image/newbie.png" alt="Newbie" className={styles.sidebarImage} />
                </a>
            </aside>
        </div>
    );
};

export default SideBar;