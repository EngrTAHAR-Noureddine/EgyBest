import {themeTab} from "../Theme/Themes";
import {Tab, Tabs} from "@mui/material";
import {blue_36, white_100, white_EC} from "../Styles/Color";
import {ANIME, MOVIES, SERIES, WWE} from "../String/String_eng";
import {PoppinsFont} from "../Fonts/Fonts";
import {ThemeProvider} from "@emotion/react";
import * as React from "react";

export function CustomTab(prop){

    const tabs_name = [
        {
            tab:MOVIES,
            number : prop.list[0]
        },
        {
            tab:SERIES,
            number : prop.list[1]
        },
        {
            tab:ANIME,
            number : prop.list[2]
        },
        {
            tab:WWE,
            number : prop.list[3]
        }
        ]

    return(
        <ThemeProvider theme={themeTab}>
            <Tabs variant={'fullWidth'} value={prop.value} onChange={prop.handleChange}
                  textColor={'primary'}
                  TabIndicatorProps={{style: {backgroundColor:blue_36, height:5}}}
                  sx={{borderBottom:1, borderColor:white_EC}}
            >
                {
                    tabs_name.map((item)=>(
                        <Tab  label={`${item.tab} (${item.number})`} sx={{
                            textTransform:'none',color:white_100,fontFamily:PoppinsFont, fontWeight:'bolder',fontSize:'1.2rem'
                        }} />
                    ))
                }

            </Tabs>
        </ThemeProvider>
    )
}