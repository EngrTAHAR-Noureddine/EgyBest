import { white_10} from "../Themes/Styles/Color";
import {Box, ButtonGroup} from "@mui/material";
import React, {useState} from "react";
import {SIGN_GROUP_THEME} from "../Themes/Theme/Themes";
import {ThemeProvider} from "@emotion/react";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {ButtonLG_LIBRARY} from "../Themes/Elements/Buttons";
import {LIBRARY_BUTTON} from "../Themes/Elements/IconButton";
import DialogWatchTogether from "./Dialog_Watch_together";

export default function  AddToLibrary(prop) {

    const [addLibrary, setAddLib] = useState(false);
    const onAddIt = ()=>{
        setAddLib(!addLibrary);
    }
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));





    return(
        <Box flexGrow={1} height={'10vh'} display={(prop.signedIn)?'flex':'none'} borderRadius={5} mt={2}
             flexDirection={(prop.isArabic)?'row-reverse':'row'}
             justifyContent={'center'} alignItems={'center'} bgcolor={white_10} mx={5} px={5}>

            <ThemeProvider theme={SIGN_GROUP_THEME}>
            <ButtonGroup variant={'text'}>
                {
                    (matches)?<ButtonLG_LIBRARY onAddIt={onAddIt}  addLibrary={addLibrary}
                                                Add_In_Library={prop.Add_In_Library} added_In_library={prop.added_In_library}/>
                        :<LIBRARY_BUTTON onAddIt={onAddIt} addLibrary={addLibrary}/>
                }
                <DialogWatchTogether  watch_together={prop.watch_together} matches={matches}/>

            </ButtonGroup>
            </ThemeProvider>
        </Box>
    )

}