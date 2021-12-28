import { combineReducers } from 'redux';
import Arabic from './arabicReducer';

export default combineReducers({
    arabic_version: Arabic,
});