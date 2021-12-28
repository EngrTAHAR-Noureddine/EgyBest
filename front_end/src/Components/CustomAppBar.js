import {AppBar, Box, Button, ButtonGroup, Grid, Toolbar} from '@mui/material';
import {ANIME, MOVIES, SERIES, SIGNIN, SIGNUP, WWE} from "../Themes/String/String_eng";
import {TYPOGRAPHY_LOGO, TYPOGRAPHY_MENU_XL} from "../Themes/Styles/Typographies";
import {MENU_BUTTON_XL} from "../Themes/Elements/Buttons";
import {ThemeProvider} from "@emotion/react";
import {SIGN_GROUP_THEME} from "../Themes/Theme/Themes";
import {SearchBar} from "../Themes/Elements/SearchBar";
import {MENU_BUTTON} from "../Themes/Elements/IconButton";
import {ScrollToColor} from '../Themes/Animation/ScrollToColor';
import {flex_styles} from "../Themes/Styles/styles";
import {CustomDrawerMenuAppBar} from "./CustomDrawerMenuAppBar";
import {useState} from "react";





function CustomAppBar() {
    const [open, setOpen] = useState(false);
    const handleClickOpen  = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{flexGrow: 1}} bgcolor={"transparent"}>
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
                              flexDirection={'column'} alignItems={'center'}
                              justifyContent={'center'}>
                            <div>
                                <MENU_BUTTON_XL item={MOVIES}/>
                                <MENU_BUTTON_XL item={SERIES}/>
                                <MENU_BUTTON_XL item={ANIME}/>
                                <MENU_BUTTON_XL item={WWE}/>
                            </div>
                        </Grid>
                        <Grid item xs={6} xl={4} style={flex_styles.col_center}>
                            <div>
                                <Grid container xs={12} style={flex_styles.row_right}>

                                    <Grid item xs={12} xl={9}>
                                        <SearchBar/>
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
                                                        <TYPOGRAPHY_MENU_XL item={SIGNIN}/>
                                                    </Button>
                                                    <Button sx={{textTransform: 'none'}}>
                                                        <TYPOGRAPHY_MENU_XL item={SIGNUP}/>
                                                    </Button>
                                                </ButtonGroup>
                                            </ThemeProvider>

                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                    <CustomDrawerMenuAppBar handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} />
                </Toolbar>
            </AppBar>
            </ScrollToColor>
        </Box>
    )
}

export default CustomAppBar;