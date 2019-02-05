import lang from '../lang';
import {
    FIELD_LAST_NAME,
    FIELD_MOBILE,
    FIELD_NAME,
    FIELD_POSITION_ID
} from '../constants/formData';

export const getPositionOptions = () => {
    return lang.POSITIONS.map((title, id) => ({
        id,
        title,
    }));
};

export const getPositionTitle = (id) => lang.POSITIONS[id];

export const getServerData = (data) => {
    const formData = new FormData();

    for(const key in data){
        formData.append(key, data[key]);
    }

    return formData;
};

export const getFormErrors = (data) => {
    const validateError = {};

    validateError[FIELD_POSITION_ID] = data[FIELD_POSITION_ID] === null;
    validateError[FIELD_NAME] = data[FIELD_NAME] === '';
    validateError[FIELD_LAST_NAME] = data[FIELD_LAST_NAME] === '';
    validateError[FIELD_MOBILE] = data[FIELD_MOBILE] === '';

    return validateError;
};

export const hasErrors = (formErrors) => {
    return Object
        .keys(formErrors)
        .reduce((memo, field) => {
            memo = formErrors[field] || memo;
            return memo;
        }, false);
};
