import * as dataTypes from '../formData/types';
import * as types from './types';

const initialState = {
    submitInProgress: false,
    formErrors: {},
};

export default (state = {
    ...initialState,
}, action) => {
    switch (action.type) {
        case dataTypes.SEND_IN_PROGRESS: {
            return {
                ...state,
                submitInProgress: true,
                formErrors: {},
            };
        }
        case dataTypes.SEND_SUCCESS:
        case dataTypes.SEND_FAIL: {
            return {
                ...state,
                submitInProgress: false,
            };
        }
        case dataTypes.CHANGE_FIELD: {
            const { fieldId } = action.payload;
            const nextFormErrors = { ...state.formErrors };
            nextFormErrors[fieldId] = false;

            return {
                ...state,
                formErrors: nextFormErrors,
            }
        }
        case types.SET_VALIDATE_ERROR: {
            const { formErrors } = action.payload;
            return {
                ...state,
                formErrors,
            };
        }
        default:
            return state
    }
}
