import {MenuRounded, SearchRounded} from "@mui/icons-material";
import {IconButton} from "@mui/material";

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
