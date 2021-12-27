import {white_05} from "../Themes/Styles/Color";
import {Box, Grid} from "@mui/material";
import {TYPOGRAPHY_DETAILS} from "../Themes/Styles/Typographies";
import {
    CLASSIFICATION,
    COUNTRY,
    DURATION,
    LANGUAGE,
    NAME_MOVIE,
    QUALITY,
    SUBTITLES,
    TYPE
} from "../Themes/String/String";
import React from "react";
import {PlayVideo} from "../Themes/Elements/play_video";

export function Detail_movie(){
    return(
        <Box flexGrow={1} m={1} mx={5} height={{xs:'70vh', md:'50vh'}}
             borderRadius={5} bgcolor={white_05}>

            <Grid container xs={12} width={'100%'} height={'100%'}
                  direction={{xs:'column-reverse', md:'row-reverse'}}
                  justifyContent='space-between' alignItems='center'
                  p={2}
            >
                <Grid item  xs={5} width={'100%'} height={'100%'} p={1}  >
                    <Box width={'100%'} height={'100%'} >
                        <PlayVideo url={"https://www.youtube.com/embed/IeiJO1eUEiU"}/>
                    </Box>
                </Grid>
                <Grid item  xs ={6} width={'100%'} height={'100%'}  p={1}>
                    <Box width={'100%'} height={'100%'}>
                        <Grid container xs={12} width={'100%'} height={'100%'}
                              direction={'column'} justifyContent='center' alignItems='center'>
                            <Grid item xs={1} width={'100%'} height={'100%'} >
                                <TYPOGRAPHY_DETAILS item={NAME_MOVIE+'Dark'}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'} >
                                <TYPOGRAPHY_DETAILS item={CLASSIFICATION+'+16'}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'} >
                                <TYPOGRAPHY_DETAILS item={COUNTRY+'German'}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'} >
                                <TYPOGRAPHY_DETAILS item={LANGUAGE+'German'}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'}>
                                <TYPOGRAPHY_DETAILS item={TYPE+'Drama,Action'}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'}>
                                <TYPOGRAPHY_DETAILS item={QUALITY+'1080p,720p'}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'}>
                                <TYPOGRAPHY_DETAILS item={DURATION+'45min'}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'}>
                                <TYPOGRAPHY_DETAILS item={SUBTITLES+'Arabic'}/>
                            </Grid>

                        </Grid>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}