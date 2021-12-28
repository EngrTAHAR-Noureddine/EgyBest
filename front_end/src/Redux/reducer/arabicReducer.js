import {ARABIC_LANGUAGE,ENGLISH_LANGUAGE} from '../types/types';

const initialState = {
    arabic_version:true
}

export default function darkModeReducer(state = initialState, action) {
    switch (action.type) {
        case ARABIC_LANGUAGE:
            return {
                ...state,
                arabic_version: true,
            };
        case ENGLISH_LANGUAGE:
            return {
                ...state,
                arabic_version: false,
            };
        default:
            return state;
    }
}