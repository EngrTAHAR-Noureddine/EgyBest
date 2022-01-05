import {
    white_05,
} from "../Themes/Styles/Color";
import {Box, Container} from "@mui/material";
import {
    TYPOGRAPHY_CLASSIFICATION_YEAR,
    TYPOGRAPHY_DETAILS, TYPOGRAPHY_MOVIE_TITLE,
    TYPOGRAPHY_TRANSLATE_LANGUAGES
} from "../Themes/Styles/Typographies";
import React from "react";
import {PlayVideo} from "../Themes/Elements/play_video";
import String from '../Themes/String/String';
import {flex_styles} from "../Themes/Styles/styles";
import {IMAGE} from "../Themes/Elements/IMAGE";
import {BUTTON_TYPES_MOVIE} from "../Themes/Elements/Buttons";

export function Detail_movie(prop){
    const string = new String(prop.isArabic);

    const listType = (prop.isArabic)?prop.item.typeAR:prop.item.type;
    const listTranslate=(prop.isArabic)?prop.item.TranslateMovieAR:prop.item.TranslateMovie;


    return(
        <Box flexGrow={1} m={1} mx={5} height={'auto'}
             display={'flex'}
             flexDirection={{xs:'column-reverse', lg:string.REVERSE_ROW()}}
             justifyContent={'space-between'}
             borderRadius={5} bgcolor={white_05}>
                <Container maxWidth={'sm'} sx={{height:'auto', p:1}}>
                    <PlayVideo url={prop.item.trailerMovie}/>
                </Container>
                <Box  flexGrow={1} height={'auto'} p={1}>

                     <Box flexGrow={1} height={'auto'} style={flex_styles.col_center}
                           p={2}>

                        <Box flexGrow={1} height={'auto'} py={1}
                             style={(prop.isArabic)?flex_styles.row_right:flex_styles.row_left}>

                            {
                                (listType && listType.length>0 )?
                                    listType.map((item)=>(
                                        <BUTTON_TYPES_MOVIE item={item}/>
                                    ))
                                    :<div></div>
                            }
                        </Box>

                         <TYPOGRAPHY_MOVIE_TITLE title={(prop.isArabic)?prop.item.nameAR:prop.item.name} align={string.JUSTIFY_DIRECTION()}/>

                         <TYPOGRAPHY_CLASSIFICATION_YEAR item={prop.item} align={string.JUSTIFY_DIRECTION()}/>

                         <TYPOGRAPHY_DETAILS alignement={string.JUSTIFY_DIRECTION()} rowRev={string.ROW_REVERSE()} title={string.COUNTRY()}
                                             item={(prop.isArabic)?prop.item.countryAR:prop.item.country}
                                                item2={(prop.isArabic)?prop.item.languageAR:prop.item.language}/>
                         <TYPOGRAPHY_TRANSLATE_LANGUAGES title={string.SUBTITLES()} align={string.JUSTIFY_DIRECTION()} listTranslate={listTranslate}/>

                     </Box>


                </Box>

                <Box display={{xs:'none', lg:'flex'}} width={300} sx={{ height:400,p:1}}>
                    <IMAGE url={prop.item.coverPicture}/>
                </Box>

        </Box>
    )
}

