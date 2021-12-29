import {white_05} from "../Themes/Styles/Color";
import {Box, Grid} from "@mui/material";
import {TYPOGRAPHY_DETAILS} from "../Themes/Styles/Typographies";
import React from "react";
import {PlayVideo} from "../Themes/Elements/play_video";
import String from '../Themes/String/String';

export function Detail_movie(prop){
    const string = new String(prop.isArabic);


    return(
        <Box flexGrow={1} m={1} mx={5} height={{xs:'70vh', md:'50vh'}}
             borderRadius={5} bgcolor={white_05}>

            <Grid container xs={12} width={'100%'} height={'100%'}
                  direction={{xs:'column-reverse', md:string.REVERSE_ROW()}}
                  justifyContent='space-between' alignItems='center'
                  p={2}
            >
                <Grid item  xs={5} width={'100%'} height={'100%'} p={1}  >
                    <Box width={'100%'} height={'100%'} >
                        <PlayVideo url={prop.item.trailerMovie}/>
                    </Box>
                </Grid>
                <Grid item  xs ={6} width={'100%'} height={'100%'}  p={1}>
                    <Box width={'100%'} height={'100%'}>
                        <Grid container xs={12} width={'100%'} height={'100%'}
                              direction={'column'} justifyContent='center' alignItems='center'>
                            <Grid item xs={1} width={'100%'} height={'100%'} >
                                <TYPOGRAPHY_DETAILS alignement={string.JUSTIFY_DIRECTION()} rowRev={string.ROW_REVERSE()} title={string.NAME_MOVIE()}
                                                    item={(prop.isArabic)?prop.item.nameAR:prop.item.name}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'} >
                                <TYPOGRAPHY_DETAILS alignement={string.JUSTIFY_DIRECTION()} rowRev={string.ROW_REVERSE()} title={string.CLASSIFICATION()}
                                                    item={prop.item.classification}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'} >
                                <TYPOGRAPHY_DETAILS alignement={string.JUSTIFY_DIRECTION()} rowRev={string.ROW_REVERSE()} title={string.COUNTRY()}
                                                    item={(prop.isArabic)?prop.item.countryAR:prop.item.country}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'} >
                                <TYPOGRAPHY_DETAILS alignement={string.JUSTIFY_DIRECTION()} rowRev={string.ROW_REVERSE()} title={string.LANGUAGE()}
                                                    item={(prop.isArabic)?prop.item.languageAR:prop.item.language}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'}>
                                <TYPOGRAPHY_DETAILS alignement={string.JUSTIFY_DIRECTION()} rowRev={string.ROW_REVERSE()} title={string.TYPE()}
                                                    item={(prop.item.typeAR && prop.item.type)?(prop.isArabic)?prop.item.typeAR.join(','):prop.item.type.join(','):'-------'}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'}>
                                <TYPOGRAPHY_DETAILS alignement={string.JUSTIFY_DIRECTION()} rowRev={string.ROW_REVERSE()} title={string.DURATION()}
                                                    item={prop.item.DurationMovie}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'}>
                                <TYPOGRAPHY_DETAILS alignement={string.JUSTIFY_DIRECTION()} rowRev={string.ROW_REVERSE()} title={string.QUALITY()}
                                                    item={'1080p,720p,480p'}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'}>
                                <TYPOGRAPHY_DETAILS alignement={string.JUSTIFY_DIRECTION()} rowRev={string.ROW_REVERSE()} title={string.TYPE()}
                                                    item={(prop.item.TranslateMovieAR && prop.item.TranslateMovie)?(prop.isArabic)?prop.item.TranslateMovieAR.join(','):prop.item.TranslateMovie.join(','):'-----'} />
                            </Grid>

                        </Grid>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}
