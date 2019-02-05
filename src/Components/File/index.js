import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.scss';

const File = ({file, text, onChange, customStyles, disabled}) => {
    return (
        <div className={classnames(customStyles, styles.file)}>
            <input
                type="file"
                name="file"
                id="file"
                onChange={(e) => onChange(e.target.files[0])}
            />
            <label htmlFor={!disabled ? "file" : ''}>{file && file.name || text}</label>
        </div>
    );
};

File.propTypes = {
    file: PropTypes.object,
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    customStyles: PropTypes.string,
    disabled: PropTypes.bool,
};

File.defaultProps = {
    file: null,
    customStyles: null,
    disabled: false,
};

export default File;
