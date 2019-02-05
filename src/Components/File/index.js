import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.scss';

class File extends Component {
    constructor(props) {
        super(props);

        this.state = { filename: null };
    }

    handleChange(files) {
        this.setState({filename: files[0].name});
        this.props.onChange(files[0]);
    }

    render() {
        const { text, customStyles } = this.props;
        const { filename } = this.state;
        return (
            <div
                className={classnames(customStyles, styles.file)}
            >
                <input
                    type="file"
                    name="file"
                    id="file"
                    onChange={(e) => this.handleChange(e.target.files)}
                />
                <label htmlFor="file">{filename || text}</label>
            </div>
        );
    }
}

File.propTypes = {
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    customStyles: PropTypes.string,
};

File.defaultProps = {
    customStyles: null,
};

export default File;
