import {Box, Typography} from "@mui/material";
import {Amiri} from "../Fonts/Fonts";
import { FORGET_PASSWORD} from "../String/String_eng";
import {ThemeProvider} from "@emotion/react";
import { RESPONSIVE_THEME, themeTyp, themeTypH6} from "../Theme/Themes";
import React from "react";
import {blue_0A, white_100, white_7070, white_EC} from "./Color";
import {flex_styles} from "./styles";
import {String} from "../String/String";

const string = new String(true);


export const  TYPOGRAPHY_LOGO = ()=>(
    <ThemeProvider theme={RESPONSIVE_THEME}>
        <Typography fontFamily={Amiri} fontWeight={900} fontStyle={'italic'} variant="h3" component="div"
                    sx={{flexGrow: 1}} style={flex_styles.row_left} >
            <Typography fontFamily={'inherit'} fontWeight={'inherit'}
                        fontStyle={'inherit'} variant='inherit' color={'#e50914'}>
                {string.LOGO_EGY}
            </Typography>
            <Typography fontFamily={'inherit'} fontWeight={'inherit'}
                        fontStyle={'inherit'} variant='inherit'
                        color={blue_0A}>
                {string.LOGO_BEST}
            </Typography>
        </Typography>
    </ThemeProvider>
);




export const TYPOGRAPHY_MENU_XL = (prop)=>(
    <ThemeProvider theme={RESPONSIVE_THEME}>
    <Typography
    variant={'h6'}
    fontStyle={"normal"}
    fontWeight={'400'}
    fontFamily={Amiri}
    >
        {prop.item}
    </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_CONTENT_CARD_MOVIE = (prop)=>(
    <ThemeProvider theme={themeTyp}>
    <Typography variant={'h5'} color={'white'} fontWeight={'bolder'}
                textAlign={'center'}
                fontStyle={"normal"}
                fontFamily={Amiri}
                style={{ wordWrap: "break-word" }}
    >
        {prop.item}
    </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_SHORTCUT_LIST = (prop)=>(
    <ThemeProvider theme={themeTyp}>
    <Typography variant={'h5'} color={'white'} fontWeight={'bolder'}
                textAlign={'center'}
                fontStyle={"normal"}
                fontFamily={Amiri}
                style={{ wordWrap: "break-word" }}
    >
        {prop.item}
    </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_POPUP_MENU = (prop) => (
    <ThemeProvider theme={themeTypH6}>
    <Typography variant={'h6'} color={'white'} fontWeight={'bolder'}
                textAlign={'center'}
                fontStyle={"normal"}
                fontFamily={Amiri}
                style={{ wordWrap: "break-word" }}
    >
        {prop.item}
    </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_SEARCH_RESULT = (prop)=>(
    <ThemeProvider theme={RESPONSIVE_THEME}>
    <Typography variant={'h5'} width={'inherit'} height={'auto'} textAlign={'left'}
                color={white_EC}
                fontFamily={Amiri}
                fontWeight={prop.Weight}
                style={{ wordWrap: "break-word" }}
                >
        {prop.item}
    </Typography>
    </ThemeProvider>
)
export const TYPOGRAPHY_NAME_PERSON = (prop)=>(
    <Typography variant={'h4'} width={'100%'} height={'100%'} textAlign={'center'}
                color={white_EC}
                fontFamily={Amiri}
                fontWeight={prop.Weight}
                style={{ wordWrap: "break-word"}}
    >
        {prop.item}
    </Typography>
);

export const TYPOGRAPHY_GIG_TITLE_UNDERLINED = (prop)=>(
    <Box flexGrow={1} px={5} >
        <Typography variant={'h5'} textAlign={'center'} fontFamily={Amiri}
                    color={'white'} sx={{borderBottom:1, borderColor:'white'}} mb={5}>
            {prop.what} ({prop.number})
        </Typography>
    </Box>
)
export const TYPOGRAPHY_PAGE_NOT_FOUND = (prop)=>(

    <Box flexGrow={1} px={5}>
        <ThemeProvider theme={RESPONSIVE_THEME}>
        <Typography variant={'h2'} textAlign={'center'} fontFamily={Amiri}
                    color={white_7070}>
            {prop.title}
        </Typography>
        </ThemeProvider>
    </Box>

);

export const TYPOGRAPHY_SIGN_TITLE = (prop)=>(
    <ThemeProvider theme={RESPONSIVE_THEME}>
    <Typography variant={'h4'} width={'100%'}
                color={white_100}
                fontFamily={Amiri}
                height={'100%'} style={flex_styles.col_center} textAlign={'center'}>
        {prop.title}
    </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_FORGET_PASSWORD =()=>(
    <Typography variant={'body2'} color={blue_0A} fontFamily={Amiri} fontWeight={'lighter'} textAlign={'right'} px={5}>
        {FORGET_PASSWORD}
    </Typography>
);
export  const TYPOGRAPHY_STYLE_EMAIL_PASSWORD = (prop)=>(
    <Typography variant={'h6'} flexGrow={1} height={'auto'}
                color={white_100}
                fontFamily={Amiri} px={1}>
        {prop.title}
    </Typography>
);

export const TYPOGRAPHY_SIGN_WITH = (prop) => (
    <ThemeProvider theme={RESPONSIVE_THEME}>
    <Typography variant={'h6'} width={'100%'}
                color={white_100}
                fontFamily={Amiri} textAlign={'center'}>
        {prop.text}
    </Typography>
    </ThemeProvider>
)

export const TYPOGRAPHY_IF_HAVE_ACCOUNT = (prop) => (
    <ThemeProvider theme={RESPONSIVE_THEME}>
        <Box style={flex_styles.row_center} flexGrow={1} px={{xs:0, md:10}}>
            <Typography flexGrow={1} variant={'subtitle1'}
                        color={white_100}
                        fontFamily={Amiri} textAlign={'right'} pr={1}>
                {prop.text}
            </Typography>
            <Typography flexGrow={1} variant={'subtitle1'}
                        color={blue_0A}
                        fontFamily={Amiri} sx={{textDecoration:'underline'}} textAlign={'left'}>
                {prop.linkText}
            </Typography>
        </Box>

    </ThemeProvider>
);
export const TYPOGRAPHY_TITLE_MOVIE = (prop)=>(
    <ThemeProvider theme={RESPONSIVE_THEME}>
    <Typography variant={'h3'} width={'inherit'} textAlign={'left'}
                color={white_EC}
                fontFamily={Amiri}
                fontWeight={prop.Weight}
                style={{ wordWrap: "break-word" }}
    >
        {prop.item}
    </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_STORY = (prop)=>(
    <ThemeProvider theme={themeTypH6}>
        <Typography variant={'h6'} width={'inherit'} textAlign={'center'}
                    color={white_EC}
                    fontFamily={Amiri}
                    fontWeight={'normal'}
                    style={{ wordWrap: "break-word" }}
        >
            {prop.item}
        </Typography>
    </ThemeProvider>
);
export const TYPOGRAPHY_DETAILS = (prop)=>(
    <ThemeProvider theme={themeTypH6}>
        <Typography variant={'h6'} width={'inherit'} textAlign={'left'}
                    color={white_EC}
                    fontFamily={Amiri}
                    fontWeight={'normal'}
                    style={{ wordWrap: "break-word" }}
        >
            {prop.item}
        </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_NAME_ACTOR = (prop)=>(
    <ThemeProvider theme={themeTyp}>
    <Typography variant={'h5'} width={'90%'} textAlign={'center'} color={blue_0A}
                fontFamily={Amiri} fontWeight={'bold'} sx={{textDecoration:'underline'}} style={{ wordWrap: "break-word" }}>
        {prop.name}
    </Typography>
    </ThemeProvider>
);
export const TYPOGRAPHY_PLAY_ACTOR = prop =>(
    <ThemeProvider theme={themeTypH6}>
    <Typography variant={'h6'} width={'90%'} textAlign={'center'}
                color={white_EC} fontFamily={Amiri} fontWeight={'normal'} style={{ wordWrap: "break-word" }}>
        {prop.name}
    </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_NOT_EXIST = (prop) =>(
    <Typography p={1} variant={'h6'} color={white_100} textAlign={'center'}> {prop.text} </Typography>
)
export const TYPOGRAPHY_YOUR_RATING = (prop)=>(
    <ThemeProvider theme={RESPONSIVE_THEME}>
        <Typography variant={'h5'} color={white_100} fontFamily={Amiri} sx={{wordWrap: "break-word" }}>
            {prop.title}
        </Typography>
    </ThemeProvider>
)