import {Box, Link, Typography} from "@mui/material";
import {AmiriFont, MontserratFont} from "../Fonts/Fonts";
import {ThemeProvider} from "@emotion/react";
import {RESPONSIVE_THEME, themeTyp, themeTypH6} from "../Theme/Themes";
import React from "react";
import {blue_0A, divider_B1, red_e5, white_100, white_50, white_7070, white_EC} from "./Color";
import {flex_styles} from "./styles";
import Strings from '../String/String';


const string = new Strings();

export var CustomSingleton = (function () {
    var font = AmiriFont;
    return {
        setIt:function (it){
            font=(!it)?AmiriFont:MontserratFont

        },
        getIt:function (){

            return font;
        },
        justEnglish:function (){
            return MontserratFont
        }
    }
})();


export const  TYPOGRAPHY_LOGO = ()=>(
    <Link href={'/EgyBest/'} sx={{textDecoration:'none'}}>
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
    fontFamily={CustomSingleton.getIt()}
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
                fontFamily={CustomSingleton.justEnglish()}
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
                fontFamily={CustomSingleton.getIt()}
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
                fontFamily={CustomSingleton.getIt()}
                style={{ wordWrap: "break-word" }}
    >
        {prop.item}
    </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_SEARCH_RESULT = (prop)=>(
    <ThemeProvider theme={RESPONSIVE_THEME}>
    <Typography variant={'h5'} width={'inherit'} height={'auto'} textAlign={'center'}
                color={white_EC}
                fontFamily={CustomSingleton.getIt()}
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
                fontFamily={CustomSingleton.getIt()}
                fontWeight={prop.Weight}
                style={{ wordWrap: "break-word"}}
    >
        {prop.item}
    </Typography>
);

export const TYPOGRAPHY_GIG_TITLE_UNDERLINED = (prop)=>(
    <Box flexGrow={1} px={5} >
        <Typography variant={'h5'} textAlign={'center'} fontFamily={CustomSingleton.getIt()}
                    color={'white'} sx={{borderBottom:1, borderColor:'white'}} mb={5}>
            {prop.what}
        </Typography>
    </Box>
)
export const TYPOGRAPHY_PAGE_NOT_FOUND = (prop)=>(

    <Box flexGrow={1} px={5}>
        <ThemeProvider theme={RESPONSIVE_THEME}>
        <Typography variant={'h2'} textAlign={'center'} fontFamily={CustomSingleton.getIt()}
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
                fontFamily={CustomSingleton.getIt()}
                height={'100%'} style={flex_styles.col_center} textAlign={'center'}>
        {prop.title}
    </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_FORGET_PASSWORD =(prop)=>(
    <Typography variant={'body2'} color={blue_0A} fontFamily={CustomSingleton.getIt()} fontWeight={'lighter'} textAlign={'right'} px={5}>
        {prop.title}
    </Typography>
);
export  const TYPOGRAPHY_STYLE_EMAIL_PASSWORD = (prop)=>(
    <Typography variant={'h6'} flexGrow={1} height={'auto'}
                textAlign={prop.direction} fontFamily={CustomSingleton.getIt()}
                color={white_100}
                 px={1}>
        {prop.title}
    </Typography>
);

export const TYPOGRAPHY_SIGN_WITH = (prop) => (
    <ThemeProvider theme={RESPONSIVE_THEME}>
    <Typography variant={'h6'} width={'100%'} fontFamily={CustomSingleton.getIt()}
                color={(prop.color)?prop.color:white_100}
                 textAlign={'center'}>
        {prop.text}
    </Typography>
    </ThemeProvider>
)

export const TYPOGRAPHY_IF_HAVE_ACCOUNT = (prop) => (
    <ThemeProvider theme={RESPONSIVE_THEME}>
        <Box display={'flex'} justifyContent={'center'} flexDirection={prop.direction} flexGrow={1} px={{xs:0, md:10}}>
            <Typography flexGrow={1} variant={'subtitle1'}
                        color={white_100} fontFamily={CustomSingleton.getIt()}
                         textAlign={(prop.isArabic)?'left':'right'} px={1}>
                {prop.text}
            </Typography>
            <Typography flexGrow={1} variant={'subtitle1'}
                        color={blue_0A} fontFamily={CustomSingleton.getIt()}
                         sx={{textDecoration:'underline'}} textAlign={(prop.isArabic)?'right':'left'}>
                {prop.linkText}
            </Typography>
        </Box>

    </ThemeProvider>
);
export const TYPOGRAPHY_TITLE_MOVIE = (prop)=>(
    <ThemeProvider theme={RESPONSIVE_THEME}>
    <Typography variant={'h3'} width={'inherit'} textAlign={'left'}
                color={white_EC}
                fontFamily={CustomSingleton.justEnglish()}
                fontWeight={prop.Weight}
                style={{ wordWrap: "break-word" }}
    >
        {prop.item}
    </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_STORY = (prop)=>(
    <ThemeProvider theme={themeTypH6}>
        <Typography variant={'body1'} width={'inherit'} textAlign={'center'}
                    color={white_EC}
                    fontFamily={CustomSingleton.getIt()}
                    fontWeight={'normal'}
                    style={{ wordWrap: "break-word" }}
        >
            {prop.item}
        </Typography>
    </ThemeProvider>
);
export const TYPOGRAPHY_DETAILS = (prop)=>(
    <ThemeProvider theme={RESPONSIVE_THEME}>
        <Typography variant={'h6'} flexGrow={1} px={2}
                    display={'flex'}
                    flexDirection={prop.rowRev}
                    justifyContent={prop.alignement}
                    color={white_EC}
                    fontFamily={CustomSingleton.getIt()}
                    fontWeight={'bold'}
                    sx={{ wordWrap: "break-word" }}
        >
            <Typography variant={'h6'} width={'fit-content'} textAlign={prop.alignement}
                        color={white_EC}
                        fontFamily={CustomSingleton.getIt()}
                        fontWeight={'inherit'}
                        style={{ wordWrap: "break-word" }}>
                {prop.title}
            </Typography>
            &nbsp;
            <Typography variant={'h6'} width={'fit-content'} textAlign={prop.alignement}
                        color={white_EC}
                        fontFamily={CustomSingleton.getIt()}
                        fontWeight={'inherit'}
                        style={{ wordWrap: "break-word" }}>
                {prop.item}
            </Typography>
            &nbsp;<b>.</b>&nbsp;
            {prop.item2}

        </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_NAME_ACTOR = (prop)=>(
    <Link href={'/EgyBest/actor'} width={'inherit'} onClick={()=>prop.selectorActor(prop.item)}>
    <ThemeProvider theme={themeTyp}>
    <Typography  variant={'h5'} width={'90%'} textAlign={'center'} color={blue_0A} fontFamily={CustomSingleton.getIt()}
                 fontWeight={'bold'} sx={{textDecoration:'underline',width:'90%',px:1}}
                style={{ wordWrap: "break-word" }}>
        {prop.name}
    </Typography>
    </ThemeProvider>
    </Link>
);
export const TYPOGRAPHY_PLAY_ACTOR = prop =>(
    <ThemeProvider theme={themeTypH6}>
    <Typography variant={'h6'} width={'90%'} textAlign={'center'} fontFamily={CustomSingleton.getIt()}
                color={white_EC}  fontWeight={'normal'} style={{ wordWrap: "break-word" }}>
        {prop.name}
    </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_NOT_EXIST = (prop) =>(
    <Typography p={1} variant={'h6'} color={white_100} fontFamily={CustomSingleton.getIt()}
                sx={{wordWrap: "break-word" }} textAlign={'center'}> {prop.text} </Typography>
)
export const TYPOGRAPHY_YOUR_RATING = (prop)=>(
    <ThemeProvider theme={RESPONSIVE_THEME}>
        <Typography variant={(prop.variant)?prop.variant:'h5'} fontFamily={CustomSingleton.getIt()}
                    color={(prop.color)?prop.color:white_100}  sx={{wordWrap: "break-word" }}>
            {prop.title}
        </Typography>
    </ThemeProvider>
)

export const TYPOGRAPHY_NOTIFICATION = (prop)=>(
    <ThemeProvider theme={RESPONSIVE_THEME}>
    <Typography variant={'h6'} fontFamily={CustomSingleton.getIt()} textAlign={prop.align} color={white_100} sx={{wordWrap: "break-word" }}>
        {prop.notification}
    </Typography>
    </ThemeProvider>
)

export const TYPOGRAPHY_BUTTON_TYPE = (prop)=>(
    <ThemeProvider theme={RESPONSIVE_THEME}>
        <Typography fontFamily={CustomSingleton.getIt()} color={white_100} sx={{wordWrap: "break-word" }}>
            {prop.item}
        </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_MOVIE_TITLE = (prop)=>(
    <Typography  px={2} variant={'h2'} color={white_100} fontFamily={CustomSingleton.getIt()} sx={{wordWrap: "break-word" }}
                 flexGrow={1} height={'fit-content'} textAlign={prop.align}>
        {prop.title}
    </Typography>
);
export const TYPOGRAPHY_CLASSIFICATION_YEAR = (prop)=>(
    <Typography  px={2} variant={'subtitle1'} color={white_50} fontFamily={CustomSingleton.getIt()} sx={{wordWrap: "break-word" }}
                 flexGrow={1} height={'fit-content'} textAlign={prop.align}>
        {prop.item.classification}<b> . </b>{prop.item.DurationMovie}<b> . </b>{prop.item.year}
    </Typography>
)

export const TYPOGRAPHY_TRANSLATE_LANGUAGES = (prop)=>(
    <Typography px={2} variant={'h6'} color={white_100}
                textAlign={prop.align} sx={{wordWrap: "break-word" }}
                fontFamily={CustomSingleton.getIt()}
                fontWeight={'lighter'} fontStyle={'italic'}>
        {prop.title}&nbsp;
        {(prop.listTranslate && prop.listTranslate.length>0)?
            prop.listTranslate.join(' . ')
            :<div></div>}

    </Typography>
)

export const TYPOGRAPHY_TIME_LATEST_VUES = (prop)=>(
    <Typography  p={1} variant={'subtitle1'}
                 fontFamily={CustomSingleton.getIt()} sx={{wordWrap: "break-word",color:divider_B1 }}
                 flexGrow={1} height={'fit-content'} textAlign={'center'}>
        {prop.title}
    </Typography>
);