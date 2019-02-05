import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import PhoneInput from 'react-phone-number-input/basic-input';

import styles from './styles.module.scss';
import * as constants from '../../constants/formView';

const Input = ({
    type,
    value,
    onChange,
    placeHolder,
    customStyles,
    disabled,
    error,
}) => {
    let component = null;
    if (type === constants.INPUT_TYPE_MOBILE) {
        component = (
            <PhoneInput
                value={value}
                onChange={onChange}
                placeholder={placeHolder}
                disabled={disabled}
                className={classnames({[styles.error]: error})}
            />
        )
    } else if (type === constants.INPUT_TYPE_TEXTAREA) {
        component = (
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeHolder}
                disabled={disabled}
                className={classnames({[styles.error]: error})}
            />
        );
    } else {
        component = (
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeHolder}
                disabled={disabled}
                className={classnames({[styles.error]: error})}
            />
        );
    }

    return (
        <div className={classnames(customStyles, styles.input)}>
            {component}
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.oneOf([
        constants.INPUT_TYPE_TEXT,
        constants.INPUT_TYPE_TEXTAREA,
        constants.INPUT_TYPE_MOBILE,
    ]),
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeHolder: PropTypes.string,
    customStyles: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
};

Input.defaultProps = {
    type: constants.INPUT_TYPE_TEXT,
    validationState: true,
    placeHolder: '',
    customStyles: null,
    disabled: false,
    error: false,
};

export default Input;
