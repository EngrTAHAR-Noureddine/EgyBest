import { combineReducers } from 'redux';
import isArabic from './arabicReducer';

export default combineReducers({
    isArabic: isArabic,
});