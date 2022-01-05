import {LibraryAdd, LibraryAddCheck, MenuRounded, Notifications, People, SearchRounded} from "@mui/icons-material";
import {Avatar, Box, IconButton} from "@mui/material";
import USA_Flag from "../../Asset/united-states-of-america.png";
import ARABIC_Flag from "../../Asset/saudi-arabia.png";
import actor from '../../Asset/Actor.jpg';
import {green_34, white_100} from "../Styles/Color";
import React from "react";

export const MENU_BUTTON = (prop) => (
    <IconButton
        onClick={prop.clickOpen}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2, display:{xs:'flex', xl:'none'} }}
    >
        <MenuRounded />
    </IconButton>
);

export const SEARCH_BUTTON = (prop)=>(
    <IconButton
        href={(prop.go)?'/EgyBest/search':''}
        onClick={prop.onClicked}
        size="large"
        sx={{color:'white'}}
        aria-label="menu"
    >
        <SearchRounded />
    </IconButton>
)
export const LANGUAGE_BUTTON = (prop)=>(
    <IconButton sx={{display:{xs:'none',xl:'flex'}}} onClick={prop.click}>
        <Box    component="img"
                height={20}
                width={20}
                alt="img"
                src={(prop.isArabic)?ARABIC_Flag:USA_Flag}/>
    </IconButton>
)
export const NOTIFICATION_BUTTON = ()=>(
    <IconButton href={'/notification'} sx={{display:{xs:'flex',xl:'none'}}}>
        <Notifications sx={{color:white_100}}/>
    </IconButton>
)
export const USER_BUTTON = (prop)=>(
    <IconButton sx={{display:{xs:'none',xl:(prop.signedIn)?'flex':'none'}}} onClick={prop.click}>
        <Avatar
                alt="img"
                src={actor}/>
    </IconButton>
)

export const LIBRARY_BUTTON=(prop)=>(
    <IconButton onClick={prop.onAddIt} >
        {(prop.addLibrary)?<LibraryAddCheck sx={{width:{xs:24, xl:36}, height:{xs:24, xl:36}, color:green_34}}/>
            :<LibraryAdd sx={{width:{xs:24, xl:36}, height:{xs:24, xl:36}, color:white_100}}/>}
    </IconButton>
)

export const WATCH_BUTTON = (prop)=>(
    <IconButton onClick={prop.handleClickOpen}><People sx={{width:{xs:24, xl:36}, height:{xs:24, xl:36}, color:'#FEBB39'}}/></IconButton>
)