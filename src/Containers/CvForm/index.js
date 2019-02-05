import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './styles.module.scss';
import lang from '../../lang';
import * as utils from '../../utils';

import { changeField, sendForm } from '../../redux/formData/actions';

import Input from '../../Components/Input';
import Select from '../../Components/Select';
import Button from '../../Components/Button';
import File from '../../Components/File';

import {
    FIELD_COMMENTS, FIELD_CV_FILE,
    FIELD_LAST_NAME,
    FIELD_LINK, FIELD_MOBILE,
    FIELD_NAME, FIELD_POSITION_ID
} from '../../constants/formData';
import {
    INPUT_TYPE_TEXTAREA,
} from '../../constants/formView';

const CvForm = ({
    formData,
    formView,
    actions,
}) => {
    return (
        <div className={styles.cvForm}>
            <div className={styles.content}>
                <h1>{lang.TITLE}</h1>
                <Select
                    onSelect={(value) => actions.changeField(FIELD_POSITION_ID, value)}
                    selectedOption={{
                        id: formData[FIELD_POSITION_ID],
                        title: utils.getPositionTitle(formData[FIELD_POSITION_ID]),
                    }}
                    options={utils.getPositionOptions()}
                    placeHolder={lang.PLACEHOLDER_POSITION}
                    customStyles={styles.positions}
                />
                <Input
                    value={formData[FIELD_NAME]}
                    onChange={(value) => actions.changeField(FIELD_NAME, value)}
                    placeHolder={lang.PLACEHOLDER_NAME}
                    customStyles={styles.name}
                />
                <Input
                    value={formData[FIELD_LAST_NAME]}
                    onChange={(value) => actions.changeField(FIELD_LAST_NAME, value)}
                    placeHolder={lang.PLACEHOLDER_LAST_NAME}
                    customStyles={styles.name}
                />
                <Input
                    value={formData[FIELD_MOBILE]}
                    onChange={(value) => actions.changeField(FIELD_MOBILE, value)}
                    placeHolder={lang.PLACEHOLDER_MOBILE}
                    customStyles={styles.mobile}
                />
                <Input
                    type={INPUT_TYPE_TEXTAREA}
                    value={formData[FIELD_COMMENTS]}
                    onChange={(value) => actions.changeField(FIELD_COMMENTS, value)}
                    placeHolder={lang.PLACEHOLDER_COMMENTS}
                    customStyles={styles.comments}
                />
                <Input
                    value={formData[FIELD_LINK]}
                    onChange={(value) => actions.changeField(FIELD_LINK, value)}
                    placeHolder={lang.PLACEHOLDER_LINK}
                    customStyles={styles.links}
                />
                <File
                    onChange={(file) => actions.changeField(FIELD_CV_FILE, file)}
                    text={lang.UPLOAD_CV}
                    customStyles={styles.linkCv}
                />
                <Button
                    onClick={actions.sendForm}
                    text={lang.SEND}
                    customStyles={null}
                    disabled={formView.submitInProgress}
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    formData: state.formData,
    formView: state.formView,
});

const mapDispatchToProps = (dispatch) => ({
    actions: {
        changeField: (fieldId, value) => dispatch(changeField(fieldId, value)),
        sendForm: () => dispatch(sendForm()),
    }
});

CvForm.propTypes = {
    formData: PropTypes.shape().isRequired,
    formView: PropTypes.shape({
        submitInProgress: PropTypes.bool,
    }).isRequired,
    actions: PropTypes.shape({
        changeField: PropTypes.func,
        sendForm: PropTypes.func,
    }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CvForm);