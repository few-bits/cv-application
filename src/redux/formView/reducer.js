import * as dataTypes from '../formData/types';

const initialState = {
    submitInProgress: false,
};

export default (state = {
    ...initialState,
}, action) => {
    switch (action.type) {
        case dataTypes.SEND_IN_PROGRESS: {
            return {
                ...state,
                submitInProgress: true,
            };
        }
        case dataTypes.SEND_SUCCESS:
        case dataTypes.SEND_FAIL: {
            return {
                ...state,
                submitInProgress: false,
            };
        }
        default:
            return state
    }
}
