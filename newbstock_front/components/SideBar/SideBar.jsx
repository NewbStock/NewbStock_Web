import React from 'react';
import styles from './SideBar.module.css'


function SideBar() {
    return (
        <div className={styles.sidebar}>
            <aside className={styles.imageContainer}>
                <img src="image/news.png" alt="News" className={styles.sidebarImage} />
                <img src="image/calculator.png" alt="Calculator" className={styles.sidebarImage} />
                <img src="image/newbie.png" alt="Newbie" className={styles.sidebarImage} />
            </aside>
        </div>
    );
};

export default SideBar;