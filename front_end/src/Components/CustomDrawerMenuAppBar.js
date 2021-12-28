
import {Box, Drawer, List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import { black_60, black_80, blue_0A, green_34, white_100} from "../Themes/Styles/Color";
import {PoppinsFont} from "../Themes/Fonts/Fonts";
import {ANIME, MOVIES, SERIES, SIGNIN, SIGNUP, WWE} from "../Themes/String/String_eng";


function List_Menu(prop){
    return(
        <List  sx={{ borderRadius:2, mt:2, px:1}}>
            {prop.list.map((item)=>(
                <ListItem disablePadding sx={{
                    color:white_100,
                    backgroundColor:(item===SIGNUP)?green_34:(item===SIGNIN)?blue_0A:'transparent',
                    borderRadius:2, mb:1 , '&:hover':{backgroundColor:black_60}}}>
                    <ListItemButton>
                        <ListItemText><Typography variant={'h6'} fontFamily={PoppinsFont} textAlign={'left'}>{`${item}`}</Typography></ListItemText>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

export function CustomDrawerMenuAppBar(prop) {

    const list = ['Home', MOVIES, SERIES,ANIME,WWE, SIGNIN, SIGNUP];
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
                <List_Menu list={list}/>
            </Box>
        </Drawer>
    )




}