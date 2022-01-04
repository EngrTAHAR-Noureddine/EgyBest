import {Box, Typography} from "@mui/material";
import {flex_styles} from "../Themes/Styles/styles";
import {CustomSingleton, TYPOGRAPHY_YOUR_RATING} from "../Themes/Styles/Typographies";
import {white_10, white_100} from "../Themes/Styles/Color";
import {RatingBar} from "../Themes/Elements/rating_bar";
import {ScoreCounter} from "../Themes/Elements/Score_counter";
import React from "react";

export function RatingUser(prop) {





    return(
        <Box flexGrow={1} height={'10vh'} display={(prop.signedIn)?'flex':'none'} borderRadius={5} mt={2}
             flexDirection={(prop.isArabic)?'row-reverse':'row'}
             justifyContent={'space-between'} alignItems={'center'} bgcolor={white_10} mx={5}>

            <Box width={{xs:'40%', lg:'20%'}} height={'100%'}
                 style={flex_styles.row_center} alignItems={'center'}>
                <TYPOGRAPHY_YOUR_RATING title={prop.youRating}/>
            </Box>
            <Box
                width={{lg:'60%', xl:'50%'}}
                height={'100%'} display={{xs:'none',lg:'flex'}} justifyContent={'left'} alignItems={'center'}
                >

                <Box width={'20%'} height={'100%'} style={flex_styles.col_center}>
                    <Typography variant={'h6'}
                                textAlign={'right'}
                                fontFamily={CustomSingleton.getIt()}
                                color={white_100}
                                width={'100%'}
                                sx={{wordWrap: "break-word" }}>
                        {prop.hateIt}
                    </Typography>
                </Box>
                <Box width={'60%'} height={'100%'}>
                    <RatingBar rate={prop.rate} reverse={prop.isArabic}/>
                </Box>
                <Box width={'20%'} height={'100%'} style={flex_styles.col_center}>
                    <Typography variant={'h6'}
                                textAlign={'left'}
                                fontFamily={CustomSingleton.getIt()}
                                color={white_100}
                                width={'100%'}
                                sx={{wordWrap: "break-word" }}>
                        {prop.likeIt}
                    </Typography>
                </Box>

            </Box>

            <Box display={{xs:'flex',lg:'none'}} width={'50%'} height={'100%'} >
                <ScoreCounter rate={8}/>
            </Box>




        </Box>
    )

}