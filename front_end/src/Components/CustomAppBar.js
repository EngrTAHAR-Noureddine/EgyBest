import {AppBar, Box, Button, ButtonGroup, Grid, Toolbar} from '@mui/material';
import {TYPOGRAPHY_LOGO, TYPOGRAPHY_MENU_XL} from "../Themes/Styles/Typographies";
import {MENU_BUTTON_XL} from "../Themes/Elements/Buttons";
import {ThemeProvider} from "@emotion/react";
import {SIGN_GROUP_THEME} from "../Themes/Theme/Themes";
import {SearchBar} from "../Themes/Elements/SearchBar";
import {LANGUAGE_BUTTON, MENU_BUTTON} from "../Themes/Elements/IconButton";
import {ScrollToColor} from '../Themes/Animation/ScrollToColor';
import {flex_styles} from "../Themes/Styles/styles";
import {CustomDrawerMenuAppBar} from "./CustomDrawerMenuAppBar";
import {useState} from "react";

import String from "../Themes/String/String";





function CustomAppBar(prop) {
    const [open, setOpen] = useState(false);
    const string = new String(prop.isArabic);

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

                                <MENU_BUTTON_XL  item={string.MOVIES()}/>
                                <MENU_BUTTON_XL  item={string.SERIES()}/>
                                <MENU_BUTTON_XL  item={string.THEATER()}/>
                                <MENU_BUTTON_XL  item={string.WWE()}/>

                        </Grid>
                        <Grid item xs={6} xl={4} style={flex_styles.col_center}>
                            <div>
                                <Grid container xs={12} style={flex_styles.row_right}>

                                    <Grid item xs={12} xl={9} style={flex_styles.row_right}>
                                        <SearchBar isArabic={prop.isArabic}/>
                                        <LANGUAGE_BUTTON isArabic={prop.isArabic} click={prop.toggleLanguage}/>
                                    </Grid>

                                    <Grid item
                                          lg={3}
                                          display={{xs: 'none', xl: 'flex'}}
                                          flexDirection={'column'}
                                          justifyContent={'center'}>
                                        <div>
                                            <ThemeProvider theme={SIGN_GROUP_THEME}>
                                                <ButtonGroup variant="text">
                                                    <Button sx={{textTransform: 'none'}}>
                                                        <TYPOGRAPHY_MENU_XL item={string.SIGNIN()}/>
                                                    </Button>
                                                    <Button sx={{textTransform: 'none'}}>
                                                        <TYPOGRAPHY_MENU_XL item={string.SIGNUP()}/>
                                                    </Button>
                                                </ButtonGroup>
                                            </ThemeProvider>

                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                    <CustomDrawerMenuAppBar isArabic={prop.isArabic} click={prop.toggleLanguage} handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} />
                </Toolbar>
            </AppBar>
            </ScrollToColor>
        </Box>
    )
}

export default CustomAppBar;