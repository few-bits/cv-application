import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.scss';

const Button = ({ text, onClick, disabled, customStyles }) => {
    return (
        <button
            className={classnames(customStyles, styles.button)}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    customStyles: PropTypes.string,
};

Button.defaultProps = {
    disabled: false,
    customStyles: null,
};

export default Button;
