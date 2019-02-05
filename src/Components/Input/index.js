import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.scss';
import * as constants from '../../constants/formView';

const Input = ({ type, value, onChange, validationState, placeHolder, customStyles }) => {
    const component = type === constants.INPUT_TYPE_TEXT
        ? (
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeHolder}
            />
        )
        : (
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeHolder}
            />
        );
    return (
        <div className={classnames(customStyles, styles.input, {
            [styles.error]: !validationState
        })}>
            {component}
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.oneOf([ constants.INPUT_TYPE_TEXT, constants.INPUT_TYPE_TEXTAREA ]),
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeHolder: PropTypes.string,
    validationState: PropTypes.bool,
    customStyles: PropTypes.string,
};

Input.defaultProps = {
    type: constants.INPUT_TYPE_TEXT,
    validationState: true,
    placeHolder: '',
    customStyles: null,
};

export default Input;
