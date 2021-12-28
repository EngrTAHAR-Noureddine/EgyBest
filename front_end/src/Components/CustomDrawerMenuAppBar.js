
import {Box, Drawer, List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import { black_60, black_80, blue_0A, green_34, white_100} from "../Themes/Styles/Color";
import {Amiri} from "../Themes/Fonts/Fonts";
import {ANIME, MOVIES, SERIES, SIGNIN, SIGNUP, WWE} from "../Themes/String/String_eng";
import {String} from "../Themes/String/String";

function List_Menu(prop){
    return(
        <List  sx={{ borderRadius:2, mt:2, px:1}}>
            {prop.list.map((item,index)=>(
                <ListItem disablePadding sx={{
                    color:white_100,
                    backgroundColor:(index===7)?green_34:(index===6)?blue_0A:'transparent',
                    borderRadius:2, mb:1 , '&:hover':{backgroundColor:black_60}}}>
                    <ListItemButton onClick={(index===5)?prop.click:()=>{}}>
                        <ListItemText><Typography variant={'h6'} fontFamily={Amiri} textAlign={'center'}>{`${item}`}</Typography></ListItemText>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

export function CustomDrawerMenuAppBar(prop) {
    const string = new String(prop.isArabic);

    const list = [  string.HOME(),
                    string.MOVIES(),
                    string.SERIES(),
                    string.THEATER(),
                    string.WWE(),
                    string.LANGUAGE_TOGGLE(),
                    string.SIGNIN(),
                    string.SIGNUP()];

    return(
        <Drawer
            anchor='left'
            open={prop.open}
            onClose={prop.handleClose}
            sx={{display:{xs:'block', xl:'none'}}}
        >
            <Box
                sx={{ width: 300, height:'100%', backgroundColor:black_80}}
                onClick={prop.handleClose}
                onKeyDown={prop.handleClose}
            >
                <List_Menu click={prop.click} list={list}/>
            </Box>
        </Drawer>
    )




}