import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.scss';
import lang from '../../lang';
import * as constants from '../../constants/formView';

const Footer = ({ customStyles }) => {
    return (
        <div className={classnames(customStyles, styles.footer)}>
            <div className={styles.copyright}>{lang.COPYRIGHT}</div>
            <div className={styles.links}>
                <a href={constants.LINK_PRIVACY} target="_blank">{lang.PRIVACY}</a>
                <a href={constants.LINK_POLICY} target="_blank">{lang.POLICY}</a>
            </div>
        </div>
    );
};

Footer.propTypes = {
    customStyles: PropTypes.string,
};

Footer.defaultProps = {
    customStyles: null,
};

export default Footer;
