import {Box, Typography} from "@mui/material";
import {flex_styles} from "../Themes/Styles/styles";
import {TYPOGRAPHY_YOUR_RATING} from "../Themes/Styles/Typographies";
import {HATE_IT, LIKE_IT, YOUR_RATING} from "../Themes/String/String_eng";
import {AmiriFont} from "../Themes/Fonts/Fonts";
import {white_10, white_100} from "../Themes/Styles/Color";
import {RatingBar} from "../Themes/Elements/rating_bar";
import {ScoreCounter} from "../Themes/Elements/Score_counter";
import React from "react";

export function RatingUser(prop) {


    return(
        <Box flexGrow={1} height={'10vh'} display={(prop.signedIn)?'flex':'none'} borderRadius={5} mt={2}
             justifyContent={'space-between'} alignItems={'center'} bgcolor={white_10} mx={5}>

            <Box width={{xs:'40%', lg:'20%'}} height={'100%'}
                 style={flex_styles.row_center} alignItems={'center'}>
                <TYPOGRAPHY_YOUR_RATING title={YOUR_RATING}/>
            </Box>
            <Box
                width={{lg:'60%', xl:'50%'}}
                height={'100%'} display={{xs:'none',lg:'flex'}} justifyContent={'left'} alignItems={'center'}
                >

                <Box width={'20%'} height={'100%'} style={flex_styles.col_center}>
                    <Typography variant={'h6'}
                                textAlign={'right'}
                                fontFamily={AmiriFont}
                                color={white_100}
                                width={'100%'}
                                sx={{wordWrap: "break-word" }}>
                        {HATE_IT}
                    </Typography>
                </Box>
                <Box width={'60%'} height={'100%'}>
                    <RatingBar/>
                </Box>
                <Box width={'20%'} height={'100%'} style={flex_styles.col_center}>
                    <Typography variant={'h6'}
                                textAlign={'left'}
                                fontFamily={AmiriFont}
                                color={white_100}
                                width={'100%'}
                                sx={{wordWrap: "break-word" }}>
                        {LIKE_IT}
                    </Typography>
                </Box>

            </Box>

            <Box display={{xs:'flex',lg:'none'}} width={'50%'} height={'100%'} >
                <ScoreCounter rate={8}/>
            </Box>




        </Box>
    )

}