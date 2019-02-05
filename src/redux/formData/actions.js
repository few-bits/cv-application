import * as utils from '../../utils';
import * as types from './types';

export const changeField = (fieldId, value) => ({
    type: types.CHANGE_FIELD,
    payload: { fieldId, value },
});

export const sendForm = () => async (dispatch, getState) => {
    dispatch({ type: types.SEND_IN_PROGRESS });
    try {
        const { formData } = getState();
        /* get FormData to post it on server */
        const data = utils.getServerData(formData);

        await new Promise(resolve => {
            setTimeout(() => {
                console.log('SEND SUCCESS!');
                for(const pair of data.entries()) {
                    console.log(`[${pair[0]}]: ${pair[1]}`);
                }
                console.log('SEND SUCCESS!');
                resolve();
            }, 3000);
        });
        dispatch({ type: types.SEND_SUCCESS });
    } catch (e) {
        console.error(e);
        dispatch({ type: types.SEND_FAIL });
    }
};
