import * as types from './types';

export const setPositionFieldState = (positionFieldState) => ({
    type: types.SET_POSITION_FIELD_STATE,
    payload: { positionFieldState },
});
