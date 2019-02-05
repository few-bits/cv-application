import * as types from './types';

const initialState = {
    positionFieldState: false,
};

export default (state = {
    ...initialState,
}, action) => {
    switch (action.type) {
        case types.SET_POSITION_FIELD_STATE: {
            const { positionFieldState } = action.payload;
            return {
                ...state,
                positionFieldState,
            };
        }
        default:
            return state
    }
}
