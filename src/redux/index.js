import { combineReducers } from 'redux';

import formData from './formData/reducer';
import formView from './formView/reducer';

export default combineReducers({
    formData,
    formView,
});
