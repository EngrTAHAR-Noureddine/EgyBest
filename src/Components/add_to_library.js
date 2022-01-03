import {blue_0A, green_34, white_10, white_100} from "../Themes/Styles/Color";
import {Box, Button, ButtonGroup, IconButton} from "@mui/material";
import {flex_styles} from "../Themes/Styles/styles";
import {TYPOGRAPHY_YOUR_RATING} from "../Themes/Styles/Typographies";
import React, {useState} from "react";
import {LibraryAdd, LibraryAddCheck, People} from "@mui/icons-material";
import {SIGN_GROUP_THEME} from "../Themes/Theme/Themes";
import {ThemeProvider} from "@emotion/react";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function  AddToLibrary(prop) {

    const [addLibrary, setAddLib] = useState(false);
    const onAddIt = ()=>{
        setAddLib(!addLibrary);
    }
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));

    const ButtonLG_LIBRARY =(prop) =>(
        <Button onClick={onAddIt} endIcon={(!addLibrary)?<LibraryAdd sx={{width:36, height:36, color:white_100}}/>
                                    :<LibraryAddCheck sx={{width:36, height:36, color:green_34}}/>}
                style={flex_styles.row_center} alignItems={'center'} mx={2}>
            <TYPOGRAPHY_YOUR_RATING color={(addLibrary)?green_34:blue_0A} title={(!addLibrary)?prop.Add_In_Library:prop.added_In_library}/>
        </Button>
    );
    const ButtonLG_WATCH = (prop)=>(
        <Button endIcon={<People sx={{width:36, height:36, color:'#FEBB39'}}/>}
                style={flex_styles.row_center} alignItems={'center'} mx={2}>
            <TYPOGRAPHY_YOUR_RATING  color={'#FEBB39'} title={prop.watch_together}/>
        </Button>
    )


    return(
        <Box flexGrow={1} height={'10vh'} display={(prop.signedIn)?'flex':'none'} borderRadius={5} mt={2}
             flexDirection={(prop.isArabic)?'row-reverse':'row'}
             justifyContent={'center'} alignItems={'center'} bgcolor={white_10} mx={5} px={5}>

            <ThemeProvider theme={SIGN_GROUP_THEME}>
            <ButtonGroup variant={'text'}>
                {
                    (matches)?<ButtonLG_LIBRARY Add_In_Library={prop.Add_In_Library} added_In_library={prop.added_In_library}/>
                        :<IconButton onClick={onAddIt}>
                            {(addLibrary)?<LibraryAddCheck sx={{width:{xs:24, xl:36}, height:{xs:24, xl:36}, color:green_34}}/>
                                :<LibraryAdd sx={{width:{xs:24, xl:36}, height:{xs:24, xl:36}, color:white_100}}/>}
                        </IconButton>
                }
                {
                    (matches)?<ButtonLG_WATCH watch_together={prop.watch_together}/>
                        :<IconButton><People sx={{width:{xs:24, xl:36}, height:{xs:24, xl:36}, color:'#FEBB39'}}/></IconButton>
                }

            </ButtonGroup>
            </ThemeProvider>
        </Box>
    )

}