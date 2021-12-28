import { createTheme, responsiveFontSizes} from "@mui/material";
import {blue_36} from "../Styles/Color";
export const SIGN_GROUP_THEME = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF",
        },
    },
});

export let RESPONSIVE_THEME = createTheme();
RESPONSIVE_THEME = responsiveFontSizes(RESPONSIVE_THEME);



export const themeTyp = createTheme();

themeTyp.typography.h5 = {
    [themeTyp.breakpoints.down('md')]: {
        fontSize: '0.7rem',
    },
    [themeTyp.breakpoints.up('md')]: {
        fontSize: '1.2rem',
    },

};
export const themeTypH6 = createTheme();

themeTypH6.typography.h6 = {
    [themeTypH6.breakpoints.up('sm')]: {
        fontSize: '0.6rem',
    },
    [themeTypH6.breakpoints.up('md')]: {
        fontSize: '0.7rem',
    },
    [themeTypH6.breakpoints.up('lg')]: {
        fontSize: '0.7rem',
    },
    [themeTypH6.breakpoints.up('xl')]: {
        fontSize: '1.2rem',
    },

};

export let themeTab = createTheme();
themeTab.palette.primary = {
    main:blue_36
};



