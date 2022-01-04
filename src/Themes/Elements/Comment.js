import {flex_styles} from "../Styles/styles";
import {Avatar, Box, IconButton, Typography} from "@mui/material";
import {

    black_30,blue_0A,
    divider_B1, red_e5,
    white_100,
    white_80
} from "../Styles/Color";
import {ThumbDown, ThumbDownAltOutlined, ThumbUp, ThumbUpAltOutlined} from "@mui/icons-material";
import React, {useState} from "react";
import {CustomSingleton} from "../Styles/Typographies";

export default function Comment(prop) {
    const [countLike, setCountLike] = useState(0);
    const onLikeIt=()=>{
        setCountLike(1);
    }
    const onHateIt=()=>{
        setCountLike(-1);
    }

    return(
        <Box flexGrow={1} height={'auto'} mt={2} style={flex_styles.row_left}
        >

            <Avatar sx={{width:{xs:50,lg:50}, height:{xs:50,lg:50}}}/>
            <Box flexGrow={1} height={'auto'} style={flex_styles.col_up} bgcolor={black_30} sx={{borderRadius:{xs:1,xl:2}}}>
                <Typography variant={'h6'}
                            color={white_100} px={1} style={{ wordWrap: "break-word" }}
                            fontFamily={CustomSingleton.justEnglish()} fontWeight={'bold'} >USER_01</Typography>
                <Typography variant={'subtitle2'} color={divider_B1}
                            fontFamily={CustomSingleton.justEnglish()}
                            px={3} style={{ wordWrap: "break-word" }}
                            fontStyle={'italic'} >07/09/2021</Typography>
                <Box flexGrow={1}>
                    <Typography variant={'body1'} color={white_80} px={2}
                                fontFamily={CustomSingleton.justEnglish()}
                                 style={{ wordWrap: "break-word" }}
                    >thanks for uploading.</Typography>
                </Box>
                <Box flexGrow={1} px={2} style={flex_styles.row_left}>
                    <Box height={'auto'} style={flex_styles.row_left}  alignItems={'center'}>
                        <Typography variant={'h6'} height={'100%'} color={(countLike>0)?blue_0A:white_100} style={flex_styles.col_center} >{(countLike<=0)?9:9+countLike}</Typography>
                        <IconButton onClick={onLikeIt}>{(countLike>0)?<ThumbUp sx={{color:blue_0A}}/>:<ThumbUpAltOutlined sx={{color:blue_0A}}/>}</IconButton>
                    </Box>
                    <Box height={'auto'} style={flex_styles.row_left}  alignItems={'center'}>
                        <IconButton onClick={onHateIt}>{(countLike<0)?<ThumbDown sx={{color:red_e5}}/>:<ThumbDownAltOutlined sx={{color:red_e5}}/>}</IconButton>
                        <Typography variant={'h6'} height={'100%'} color={(countLike<0)?red_e5:white_100} style={flex_styles.col_center} >{(countLike>=0)?2:2-countLike}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )

}