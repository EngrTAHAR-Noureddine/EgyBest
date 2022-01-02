import {MenuRounded, Notifications, SearchRounded} from "@mui/icons-material";
import {Avatar, Box, IconButton} from "@mui/material";
import USA_Flag from "../../Asset/united-states-of-america.png";
import ARABIC_Flag from "../../Asset/saudi-arabia.png";
import actor from '../../Asset/Actor.jpg';
import {white_100} from "../Styles/Color";

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
        href={(prop.go)?'/search':''}
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