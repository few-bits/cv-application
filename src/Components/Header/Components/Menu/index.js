import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';
import lang from '../../../../lang';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.list}>
                <div className={styles.option}>{lang.MENU_MAIN}</div>
                <div className={classnames(styles.option, styles.selected)}>{lang.MENU_CAREERS}</div>
                <div className={styles.option}>{lang.MENU_OFFICES}</div>
            </div>
        </div>
    );
};

export default Menu;
