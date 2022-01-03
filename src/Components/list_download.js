import {flex_styles} from "../Themes/Styles/styles";
import {
    Box,  Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListSubheader, Typography
} from "@mui/material";
import React, { useState} from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {DOWNLOAD_BUTTON} from "../Themes/Elements/Buttons";
import {black_30, black_60, black_80, white_100, white_30} from "../Themes/Styles/Color";
import {AmiriFont} from "../Themes/Fonts/Fonts";

function List_Download (prop){
    return(
        <List  sx={{backgroundColor:white_30, borderRadius:2, mt:2, px:1}}>
            {prop.list.map((item)=>(
                <ListItem disablePadding sx={{
                    color:white_100,
                    backgroundColor:black_30,
                    borderRadius:2, mb:1 , '&:hover':{backgroundColor:black_60}}}>
                        <ListItemButton>
                        <ListItemText><Typography variant={'h6'} fontFamily={AmiriFont} textAlign={'center'}>{`${item}`}</Typography></ListItemText>
                        </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

function CustomDrawer(prop){
    return(
        <Drawer
            anchor='bottom'
            open={prop.open}
            onClose={prop.handleClose}
        >
            <Box
                sx={{ width: 'auto', backgroundColor:black_80}}
                onClick={prop.handleClose}
                onKeyDown={prop.handleClose}
            >
                <List_Download list={prop.list}/>
            </Box>
        </Drawer>
    )
}


export function ListDownload(prop) {
    const [open, setOpen] = useState(false);
    const handleClickOpen  = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));

    return(
        <Box sx={{ width: '100%', height:'100%'}} style={flex_styles.col_up}>
            <List
                sx={{width:'90%', height:'auto', p:2}}
                subheader={
                    <ListSubheader sx={{ color:white_100, backgroundColor:black_80, borderRadius:2, p:0}}>
                        <DOWNLOAD_BUTTON  title={prop.download} handleClickOpen={handleClickOpen} matches={matches}/>
                    </ListSubheader>}>
                    <CustomDrawer list={prop.list} handleClose={handleClose} open={open}  />

                    <Box sx={{display:{xs:'none', lg:'block'}}}>
                        <List_Download list={prop.list}/>
                    </Box>
            </List>
        </Box>
    )

}
