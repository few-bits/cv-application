import * as types from './types';

export const changeField = (fieldId, value) => ({
    type: types.CHANGE_FIELD,
    payload: { fieldId, value },
});
