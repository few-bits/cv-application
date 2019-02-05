import * as constants from '../../constants/formData';
import * as types from './types';

const initialState = {
    [constants.FIELD_POSITION_ID]: null,
    [constants.FIELD_NAME]: '',
    [constants.FIELD_LAST_NAME]: '',
    [constants.FIELD_MOBILE]: '',
    [constants.FIELD_COMMENTS]: '',
    [constants.FIELD_LINK]: '',
    [constants.FIELD_CV_FILE]: null,
};

export default (state = {
    ...initialState,
}, action) => {
    switch (action.type) {
        case types.CHANGE_FIELD: {
            const { fieldId, value } = action.payload;
            return {
                ...state,
                [fieldId]: value,
            };
        }
        default:
            return state
    }
}
