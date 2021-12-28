import {ARABIC_LANGUAGE,ENGLISH_LANGUAGE} from '../types/types';

const initialState = {
    isArabic:true
}

export default function darkModeReducer(state = initialState, action) {
    switch (action.type) {
        case ARABIC_LANGUAGE:
            return {
                ...state,
                isArabic: true,
            };
        case ENGLISH_LANGUAGE:
            return {
                ...state,
                isArabic: false,
            };
        default:
            return state;
    }
}