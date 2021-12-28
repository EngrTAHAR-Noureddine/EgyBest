import {Box, Button} from "@mui/material";
import {
    TYPOGRAPHY_CONTENT_CARD_MOVIE,
    TYPOGRAPHY_MENU_XL,
    TYPOGRAPHY_POPUP_MENU,
    TYPOGRAPHY_SHORTCUT_LIST, TYPOGRAPHY_SIGN_TITLE, TYPOGRAPHY_SIGN_WITH
} from "../Styles/Typographies";
import {ArrowDropDown, ArrowDropUp, ArrowForwardIosOutlined, Star} from "@mui/icons-material";
import React from "react";
import {MORE, SIGN_IN} from "../String/String_eng";
import {
    black_20,
    black_30, black_60, black_80,
    blue_0A,
    divider_B1,
    green_34,
    more_AE,
    white_100,
    white_20,
    yellow_100
} from "../Styles/Color";
import {Amiri} from "../Fonts/Fonts";
import {flex_styles} from "../Styles/styles";


export const MENU_BUTTON_XL = (prop)=>(
    <Button
        sx={{
        color:white_100,
        textTransform: 'none',
        "&,&:focus,&:hover,&:active": {
            backgroundColor:"transparent",
        }
    }}>
        <TYPOGRAPHY_MENU_XL  item={prop.item}/>
    </Button>
);

export const RATING_DISABLED_BUTTON = (prop) => (
    <Button disabled={true} disableElevation={true} endIcon={<Star sx={{color:yellow_100}}/>}>
        <TYPOGRAPHY_CONTENT_CARD_MOVIE item={prop.item}/>
    </Button>
);

export const MORE_BUTTON = () => (
    <Button
        endIcon={<ArrowForwardIosOutlined/>}
        sx={{
            color:more_AE,
            textTransform: 'none',
        }}>
        {MORE}
    </Button>
);

export const SHORTCUT_LIST_BUTTON = (prop)=>(
    <Button fullWidth={true}
            sx={{height:'100%', borderRadius:2 , textTransform:'none',

                backgroundColor:white_20,
                '&:hover':{
                    backgroundColor: black_20
                }

            }} >

        <TYPOGRAPHY_SHORTCUT_LIST item={prop.item}/>

    </Button>
);

export const POPUP_MENU_BUTTON = (prop)=>(
    <Button
        endIcon={(!prop.state)?<ArrowDropDown/>:<ArrowDropUp/>}

        sx={{
            width:{sm:100,xl:200},
            color:white_100,
            backgroundColor:black_30,
            textTransform: 'none',
            borderRadius:100,
            px:2,
            "&,&:focus,&:hover,&:active":{
                backgroundColor:black_30
            }
        }}
        onClick={prop.toggle}>
        <TYPOGRAPHY_POPUP_MENU item={prop.item}/>
    </Button>
);
export const FILTER_BUTTON = (prop) => (
    <Button
        onClick={prop.onClicked}
        sx={{
                color:white_100,
                backgroundColor:'green',
                textTransform: 'none',
                px:2,
                "&,&:focus,&:hover,&:active":{
                    backgroundColor:green_34
                },
                fontFamily:Amiri,
                fontWeight:'900',
                fontSize:'1.2rem'
            }}
    >
        Filter
    </Button>
)

export const SIGN_BUTTON = (prop)=>(
    <Box width={'90%'} height={'100%'} style={flex_styles.col_center} alignItems={'center'}
                sx={{borderBottom:1, borderColor:divider_B1,
                }}>
        <Button sx={{textTransform: 'none',px:10,mb:1, backgroundColor:(prop.type === SIGN_IN)?blue_0A:green_34, color:white_100, borderRadius:1000,
            "& , &:focus, &:hover":{
                backgroundColor:(prop.type === SIGN_IN)?blue_0A:green_34
            }}}>
            <TYPOGRAPHY_SIGN_TITLE title={prop.type}/>
        </Button>
    </Box>
);

export const CONTAINER_NUMBER_BUTTON = (prop) =>(
    <Button sx={{backgroundColor:black_80,
        color:white_100,p:2, px: {xs:2, lg:10}, margin:2, borderRadius:5, fontSize:'1rem',
        "&:hover":{
            backgroundColor:blue_0A
        }}}>
        {prop.item}
    </Button>
);

export  const DOWNLOAD_BUTTON = (prop)=>(
    <Button fullWidth
            disabled={prop.matches}
            sx={{textTransform:'none',
                "&, &:hover":{
                    backgroundColor:'transparent'
                }
            }}
            onClick={prop.handleClickOpen}>
       <TYPOGRAPHY_SIGN_WITH text={prop.title}/>
    </Button>
);

export const NEXT_PLAY_BUTTON = (prop)=>(
    <Button sx={{
        width:'90%',
        height:'90%',
        textTransform:'none',
        fontFamily:Amiri,
        fontSize:'1rem',
        borderRadius:2,
        "&, &:hover":{
            backgroundColor:black_60,
            color:white_100
        },
        m:0}}>
        {prop.item}
    </Button>
)