import React from 'react';

import styles from './styles.module.scss';
import Menu from './Components/Menu';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo} />
            <div className={styles.menu}>
                <Menu/>
            </div>
        </div>
    );
};

export default Header;
