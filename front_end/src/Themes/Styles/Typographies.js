import {Box, Link, Typography} from "@mui/material";
import {AmiriFont} from "../Fonts/Fonts";
import {FORGET_PASSWORD} from "../String/String_eng";
import {ThemeProvider} from "@emotion/react";
import {RESPONSIVE_THEME, themeTyp, themeTypH6} from "../Theme/Themes";
import React from "react";
import {blue_0A, red_e5, white_100, white_7070, white_EC} from "./Color";
import {flex_styles} from "./styles";
import Strings from '../String/String';


const string = new Strings();

export const  TYPOGRAPHY_LOGO = ()=>(
    <Link href={'/'} sx={{textDecoration:'none'}}>
    <ThemeProvider theme={RESPONSIVE_THEME}>
        <Typography fontFamily={AmiriFont} fontWeight={900} fontStyle={'italic'} variant="h3" component="div"
                    sx={{flexGrow: 1}} style={flex_styles.row_left} >
            <Typography fontFamily={'inherit'} fontWeight={'inherit'} fontStyle={'inherit'} variant='inherit'
                color={red_e5}>{string.LOGO_EGY}</Typography>
            <Typography fontFamily={'inherit'} fontWeight={'inherit'} fontStyle={'inherit'} variant='inherit'
                color={blue_0A}>{string.LOGO_BEST}</Typography>
        </Typography>
    </ThemeProvider>
    </Link>
);




export const TYPOGRAPHY_MENU_XL = (prop)=>(
    <ThemeProvider theme={RESPONSIVE_THEME}>
    <Typography
    variant={'h6'}
    fontStyle={"normal"}
    fontFamily={AmiriFont}
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
                fontFamily={AmiriFont}
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
                fontFamily={AmiriFont}
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
                fontFamily={AmiriFont}
                style={{ wordWrap: "break-word" }}
    >
        {prop.item}
    </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_SEARCH_RESULT = (prop)=>(
    <ThemeProvider theme={RESPONSIVE_THEME}>
    <Typography variant={'h5'} width={'inherit'} height={'auto'} textAlign={prop.alignement}
                color={white_EC}
                fontFamily={AmiriFont}
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
                fontFamily={AmiriFont}
                fontWeight={prop.Weight}
                style={{ wordWrap: "break-word"}}
    >
        {prop.item}
    </Typography>
);

export const TYPOGRAPHY_GIG_TITLE_UNDERLINED = (prop)=>(
    <Box flexGrow={1} px={5} >
        <Typography variant={'h5'} textAlign={'center'} fontFamily={AmiriFont}
                    color={'white'} sx={{borderBottom:1, borderColor:'white'}} mb={5}>
            {prop.what} ({prop.number})
        </Typography>
    </Box>
)
export const TYPOGRAPHY_PAGE_NOT_FOUND = (prop)=>(

    <Box flexGrow={1} px={5}>
        <ThemeProvider theme={RESPONSIVE_THEME}>
        <Typography variant={'h2'} textAlign={'center'} fontFamily={AmiriFont}
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
                fontFamily={AmiriFont}
                height={'100%'} style={flex_styles.col_center} textAlign={'center'}>
        {prop.title}
    </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_FORGET_PASSWORD =(prop)=>(
    <Typography variant={'body2'} color={blue_0A} fontFamily={AmiriFont} fontWeight={'lighter'} textAlign={'right'} px={5}>
        {prop.title}
    </Typography>
);
export  const TYPOGRAPHY_STYLE_EMAIL_PASSWORD = (prop)=>(
    <Typography variant={'h6'} flexGrow={1} height={'auto'}
                textAlign={prop.direction}
                color={white_100}
                fontFamily={AmiriFont} px={1}>
        {prop.title}
    </Typography>
);

export const TYPOGRAPHY_SIGN_WITH = (prop) => (
    <ThemeProvider theme={RESPONSIVE_THEME}>
    <Typography variant={'h6'} width={'100%'}
                color={white_100}
                fontFamily={AmiriFont} textAlign={'center'}>
        {prop.text}
    </Typography>
    </ThemeProvider>
)

export const TYPOGRAPHY_IF_HAVE_ACCOUNT = (prop) => (
    <ThemeProvider theme={RESPONSIVE_THEME}>
        <Box display={'flex'} justifyContent={'center'} flexDirection={prop.direction} flexGrow={1} px={{xs:0, md:10}}>
            <Typography flexGrow={1} variant={'subtitle1'}
                        color={white_100}
                        fontFamily={AmiriFont} textAlign={(prop.isArabic)?'left':'right'} px={1}>
                {prop.text}
            </Typography>
            <Typography flexGrow={1} variant={'subtitle1'}
                        color={blue_0A}
                        fontFamily={AmiriFont} sx={{textDecoration:'underline'}} textAlign={(prop.isArabic)?'right':'left'}>
                {prop.linkText}
            </Typography>
        </Box>

    </ThemeProvider>
);
export const TYPOGRAPHY_TITLE_MOVIE = (prop)=>(
    <ThemeProvider theme={RESPONSIVE_THEME}>
    <Typography variant={'h3'} width={'inherit'} textAlign={'left'}
                color={white_EC}
                fontFamily={AmiriFont}
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
                    fontFamily={AmiriFont}
                    fontWeight={'normal'}
                    style={{ wordWrap: "break-word" }}
        >
            {prop.item}
        </Typography>
    </ThemeProvider>
);
export const TYPOGRAPHY_DETAILS = (prop)=>(
    <ThemeProvider theme={themeTypH6}>
        <Typography variant={'h6'} width={'inherit'}
                    display={'flex'}
                    flexDirection={prop.rowRev}
                    justifyContent={prop.alignement}
                    color={white_EC}
                    fontFamily={AmiriFont}
                    fontWeight={'normal'}
                    sx={{ wordWrap: "break-word" }}
        >
            <Typography variant={'h6'} width={'fit-content'} textAlign={prop.alignement}
                        color={white_EC}
                        fontFamily={AmiriFont}
                        fontWeight={'normal'}
                        style={{ wordWrap: "break-word" }}>
                {prop.title}
            </Typography>
            <Typography variant={'h6'} width={'fit-content'} textAlign={prop.alignement}
                        color={white_EC}
                        fontFamily={AmiriFont}
                        fontWeight={'normal'}
                        style={{ wordWrap: "break-word" }}>
                {prop.item}
            </Typography>

        </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_NAME_ACTOR = (prop)=>(
    <Link href={'/actor'} width={'inherit'} onClick={()=>prop.selectorActor(prop.item)}>
    <ThemeProvider theme={themeTyp}>
    <Typography  variant={'h5'} width={'90%'} textAlign={'center'} color={blue_0A}
                fontFamily={AmiriFont} fontWeight={'bold'} sx={{textDecoration:'underline',width:'90%',px:1}}
                style={{ wordWrap: "break-word" }}>
        {prop.name}
    </Typography>
    </ThemeProvider>
    </Link>
);
export const TYPOGRAPHY_PLAY_ACTOR = prop =>(
    <ThemeProvider theme={themeTypH6}>
    <Typography variant={'h6'} width={'90%'} textAlign={'center'}
                color={white_EC} fontFamily={AmiriFont} fontWeight={'normal'} style={{ wordWrap: "break-word" }}>
        {prop.name}
    </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_NOT_EXIST = (prop) =>(
    <Typography p={1} variant={'h6'} color={white_100} fontFamily={AmiriFont} sx={{wordWrap: "break-word" }} textAlign={'center'}> {prop.text} </Typography>
)
export const TYPOGRAPHY_YOUR_RATING = (prop)=>(
    <ThemeProvider theme={RESPONSIVE_THEME}>
        <Typography variant={'h5'} color={white_100} fontFamily={AmiriFont} sx={{wordWrap: "break-word" }}>
            {prop.title}
        </Typography>
    </ThemeProvider>
)