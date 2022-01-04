import {Box, InputBase} from "@mui/material";
import {black_80, white_05, white_10, white_100} from "../Styles/Color";
import {flex_styles} from "../Styles/styles";
import React from "react";
import {CustomSingleton} from "../Styles/Typographies";

export function CommentUser (prop){
    return(
        <Box flexGrow={1} height={'10vh'} display={(prop.signedIn)?'flex':'none'} borderRadius={5} mt={2}
             justifyContent={'space-between'} alignItems={'center'} bgcolor={white_10} mx={5} px={5}>

            <Box
                bgcolor={white_05}
                height={'80%'}
                width={"50%"}
                sx={{borderBottomColor:'#363836'}}
                borderBottom={1}
            >
                <InputBase
                    sx={{height:"100%",width:"100%", color:'white',px:2, backgroundColor:'transparent',fontFamily:CustomSingleton.getIt()}}

                    inputMode={"text"}
                    placeholder="Comment…"
                />
            </Box>

            <Box component={'button'} width={{xs:'30%',lg:'20%'}} height={'80%'} bgcolor={black_80}
                 borderRadius={2}
                 style={flex_styles.row_center} alignItems={'center'}
                 fontFamily={CustomSingleton.getIt()}
                 fontSize={'1.2rem'}
                 sx={{color:white_100,border: "none",
                     cursor:'pointer',
                     outline: "none", '&:hover':{backgroundColor:white_05}}}>{prop.comment}</Box>

        </Box>
    )
}