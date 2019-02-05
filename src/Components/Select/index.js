import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.scss';

class Select extends Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };

        this.wrapperRef = React.createRef();

        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.setState({ isOpen: false });
        }
    }

    toggleSelect() {
        if (!this.props.disabled) {
            this.setState({
                isOpen: !this.state.isOpen,
            });
        }
    }

    handleSelect(id) {
        const { onSelect } = this.props;
        this.setState({ isOpen: false });
        onSelect(id);
    }

    render() {
        const { isOpen } = this.state;
        const {
            selectedOption,
            options,
            placeHolder,
            customStyles,
            error,
        } = this.props;

        const title = options.find(({id}) => id === selectedOption.id) !== undefined
            ? selectedOption.title
            : placeHolder;

        return (
            <div
                className={classnames(styles.select, customStyles, {
                    [styles.error]: error,
                })}
                ref={this.wrapperRef}
            >
                <div
                    className={styles.selectedOption}
                    onClick={this.toggleSelect.bind(this)}
                >
                    {title}
                </div>
                <div className={classnames({
                    [styles.list]: true,
                    [styles.opened]: isOpen,
                })}>
                    <div className={styles.head}>
                        {placeHolder}
                    </div>
                    {
                        options.map(({id, title}) => (
                            <div
                                key={id}
                                onClick={() => this.handleSelect(id)}
                                className={classnames({
                                    [styles.option]: true,
                                    [styles.selected]: id === selectedOption.id,
                                })}
                            >
                                {title}
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    };
}

Select.propTypes = {
    selectedOption: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
    }),
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
        }),
    ).isRequired,
    onSelect: PropTypes.func.isRequired,
    placeHolder: PropTypes.string,
    customStyles: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
};

Select.defaultProps = {
    selectedOption: '',
    placeHolder: '',
    customStyles: null,
    disabled: false,
    error: false,
};

export default Select;
