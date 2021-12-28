import {MenuRounded, SearchRounded} from "@mui/icons-material";
import {Box, IconButton} from "@mui/material";
import USA_Flag from "../../Asset/united-states-of-america.png";
import ARABIC_Flag from "../../Asset/saudi-arabia.png";

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
