
import {Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import {black_60, black_80, blue_0A, green_34, red_e5, white_100} from "../Themes/Styles/Color";
import {AmiriFont} from "../Themes/Fonts/Fonts";

import String from "../Themes/String/String";

function List_Menu(prop){
    return(
        <List  sx={{ borderRadius:2, mt:2, px:1}}>
            {prop.list.map((item,index)=>(
                <Button fullWidth href={prop.listLinks[index]} sx={{textDecoration:'none',textTransform:'none',
                    "&,&:hover,&:focus":{
                            backgroundColor: 'transparent'
                        }}}>
                <ListItem  disablePadding sx={{
                    color:white_100,
                    backgroundColor:prop.listColor[index],
                    borderRadius:2, mb:1 , '&:hover':{backgroundColor:black_60}}}>
                    <ListItemButton
                                    onClick={(index===8)?prop.log:(index===5)?prop.click:()=>{}}>
                        <ListItemText><Typography variant={'h6'} fontFamily={AmiriFont} textAlign={'center'}>{`${item}`}</Typography></ListItemText>
                    </ListItemButton>
                </ListItem>
                </Button>
            ))}
        </List>
    )
}

export function CustomDrawerMenuAppBar(prop) {
    const string = new String(prop.isArabic);

    const list =(prop.SignedIN)?
                    [   string.HOME(),
                        string.MOVIES(),
                        string.SERIES(),
                        string.THEATER(),
                        string.WWE(),
                        string.LANGUAGE_TOGGLE(),
                        string.SIGNIN(),
                        string.SIGNUP()] :
                    [   string.HOME(),
                        string.MOVIES(),
                        string.SERIES(),
                        string.THEATER(),
                        string.WWE(),
                        string.LANGUAGE_TOGGLE(),
                        string.LIBRARY(),
                        string.SETTINGS(),
                        string.SIGNOUT()];
    const listColor =(prop.SignedIN)?
        [   'transparent',
            'transparent',
            'transparent',
            'transparent',
            'transparent',
            'transparent',
            blue_0A,
            green_34] :
        [   'transparent',
            'transparent',
            'transparent',
            'transparent',
            'transparent',
            'transparent',
            'transparent',
            'transparent',
            red_e5];
    const listLinks =(prop.SignedIN)?
        [   '/',
            '/list-movies',
            '/list-series',
            '/list-theaters',
            '/list-wwe',
            '',
            '/sign-in',
            '/sign-up'] :
        [   '/',
            '/list-movies',
            '/list-series',
            '/list-theaters',
            '/list-wwe',
            '',
            '/profile',
            '/settings',
            '/'];
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
                <List_Menu  click={prop.click} log={prop.setUser} listLinks={listLinks} list={list} listColor={listColor}/>
            </Box>
        </Drawer>
    )




}