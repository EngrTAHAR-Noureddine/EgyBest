import {ARABIC_LANGUAGE,ENGLISH_LANGUAGE} from '../types/types';

export const arabicVersion = () => ({ type: ARABIC_LANGUAGE});

export const englishVersion = () => ({ type: ENGLISH_LANGUAGE });


export const actionArabicVersion = () => (dispatch)=>{
    dispatch(arabicVersion());
};

export const actionEnglishVersion = ()=> (dispatch) =>{
    dispatch(englishVersion());
};