import {
    AppBar,
    Box,
    Button,
    ButtonGroup,
    Divider,
    Grid, Link,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from '@mui/material';
import {TYPOGRAPHY_LOGO, TYPOGRAPHY_MENU_XL} from "../Themes/Styles/Typographies";
import {MENU_BUTTON_XL} from "../Themes/Elements/Buttons";
import {ThemeProvider} from "@emotion/react";
import {SIGN_GROUP_THEME} from "../Themes/Theme/Themes";
import {SearchBar} from "../Themes/Elements/SearchBar";
import {LANGUAGE_BUTTON, MENU_BUTTON, NOTIFICATION_BUTTON, USER_BUTTON} from "../Themes/Elements/IconButton";
import {ScrollToColor} from '../Themes/Animation/ScrollToColor';
import {flex_styles} from "../Themes/Styles/styles";
import {CustomDrawerMenuAppBar} from "./CustomDrawerMenuAppBar";
import {useState} from "react";

import String from "../Themes/String/String";
import {black_60, grey_36, red_e5, white_100, white_7070} from "../Themes/Styles/Color";
import {AmiriFont} from "../Themes/Fonts/Fonts";
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles(() => ({
    menu: {
        "& .MuiPaper-root": {
            backgroundColor: black_60
        }
    }
}));



function CustomAppBar(prop) {
    const [open, setOpen] = useState(false);
    const string = new String(prop.isArabic);
    const classes = useStyles();
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const logOUT = ()=>{
        setAnchorElUser(null);
        prop.setUser();
    }
    const handleCloseNavMenu = () => {
        setAnchorElUser(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClickOpen  = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{flexGrow: 1}} bgcolor={"transparent"} p={0}>
            <ScrollToColor>
            <AppBar position={"fixed"} sx={{backgroundColor: 'transparent'}}>
                <Toolbar>
                    <Grid container xs={12}>
                        <Grid item xs={6} xl={4} bgcolor={'transparent'} style={flex_styles.row_left}>

                            <MENU_BUTTON clickOpen={handleClickOpen}/>
                            <TYPOGRAPHY_LOGO/>

                        </Grid>
                        <Grid item xs={4} bgcolor={'transparent'}
                              display={{xs: 'none', xl: 'flex'}}
                              flexDirection={string.ROW_REVERSE()} alignItems={'center'}
                              justifyContent={'center'}>

                                <MENU_BUTTON_XL link={'/list-movies'} item={string.MOVIES()}/>
                                <MENU_BUTTON_XL link={'/list-series'} item={string.SERIES()}/>
                                <MENU_BUTTON_XL link={'/list-theaters'} item={string.THEATER()}/>
                                <MENU_BUTTON_XL link={'/list-wwe'} item={string.WWE()}/>

                        </Grid>
                        <Grid item xs={6} xl={4} style={flex_styles.col_center}>
                            <div>
                                <Grid container xs={12} style={flex_styles.row_right}>

                                    <Grid item xs={12} xl={9} style={flex_styles.row_right}>
                                        <SearchBar setResearch={prop.setResearch} isArabic={prop.isArabic}/>
                                        <LANGUAGE_BUTTON isArabic={prop.isArabic} click={prop.toggleLanguage}/>
                                        <NOTIFICATION_BUTTON/>
                                    </Grid>

                                    <Grid item
                                          lg={3}
                                          display={{xs: 'none', xl: 'flex'}}
                                          flexDirection={'column'}
                                          justifyContent={'center'}>
                                        <div>
                                            <ThemeProvider theme={SIGN_GROUP_THEME}>
                                                <ButtonGroup variant="text" sx={{display:(prop.SignedIN)?'none':'flex'}}>
                                                    <Button href={'/sign-in'} sx={{textTransform: 'none'}}>
                                                        <TYPOGRAPHY_MENU_XL item={string.SIGNIN()}/>
                                                    </Button>
                                                    <Button href={'/sign-up'} sx={{textTransform: 'none'}}>
                                                        <TYPOGRAPHY_MENU_XL item={string.SIGNUP()}/>
                                                    </Button>
                                                </ButtonGroup>
                                            </ThemeProvider>
                                            <USER_BUTTON signedIn={prop.SignedIN} click={handleOpenUserMenu}/>
                                            <Menu
                                                className={classes.menu}
                                                sx={{ mt: '45px',padding:0 }}
                                                id="menu-appbar"
                                                anchorEl={anchorElUser}
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                keepMounted
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                open={Boolean(anchorElUser)}
                                                onClose={handleCloseUserMenu}

                                            >
                                                <Box sx={{width:'inherit', height:'inherit',px:1}}>
                                                    <MenuItem  key={'notification'}
                                                               sx={{color:white_100, "&:hover":{backgroundColor:grey_36,borderRadius:100,color:white_100}}}
                                                               onClick={handleCloseNavMenu}>
                                                        <Link href={'/notification'} sx={{textDecoration:'none'}}>
                                                            <Typography fontFamily={AmiriFont} color={white_100} textAlign="center">{string.NOTIFICATIONS()}</Typography>
                                                        </Link>
                                                    </MenuItem>
                                                    <MenuItem  key={'library'}
                                                               sx={{color:white_100, "&:hover":{backgroundColor:grey_36,borderRadius:100,color:white_100}}}

                                                               onClick={handleCloseNavMenu}>
                                                        <Link href={'/profile'} sx={{textDecoration:'none'}}>
                                                        <Typography fontFamily={AmiriFont} color={white_100} textAlign="center">{string.LIBRARY()}</Typography>
                                                        </Link>
                                                    </MenuItem>


                                                    <MenuItem  key={'settings'}

                                                               sx={{"&:hover":{backgroundColor:grey_36,borderRadius:100,color:white_100}}}
                                                               onClick={handleCloseNavMenu}>
                                                        <Link href={'/settings'} sx={{textDecoration:'none'}}>
                                                        <Typography fontFamily={AmiriFont} color={white_100} textAlign="center">{string.SETTINGS()}</Typography>
                                                        </Link>
                                                    </MenuItem>
                                                    <Divider color={white_7070}/>
                                                    <MenuItem sx={{backgroundColor:red_e5, borderRadius:100, "&:hover":{backgroundColor:red_e5}}}
                                                              key={'LogOut'}  onClick={logOUT}>
                                                        <Link href={'/'} sx={{textDecoration:'none'}}>
                                                        <Typography  fontFamily={AmiriFont} color={white_100} textAlign="center">{string.SIGNOUT()}</Typography>
                                                        </Link>
                                                    </MenuItem>
                                                </Box>

                                            </Menu>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                    <CustomDrawerMenuAppBar setUser={prop.setUser} SignedIN={prop.SignedIN} isArabic={prop.isArabic} click={prop.toggleLanguage} handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} />
                </Toolbar>
            </AppBar>
            </ScrollToColor>
        </Box>
    )
}

export default CustomAppBar;