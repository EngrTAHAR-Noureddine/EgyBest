import { Box, IconButton} from "@mui/material";
import {TYPOGRAPHY_SIGN_WITH} from "../Styles/Typographies";
import {flex_styles} from "../Styles/styles";
import { FacebookOutlined,  Google} from "@mui/icons-material";
import {blue_0A} from "../Styles/Color";

export const SignWith = (prop) => {

    return(
        <Box style={flex_styles.col_center} alignItems={'center'}>
            <TYPOGRAPHY_SIGN_WITH text={prop.text}/>
            <Box width={'90%'} style={flex_styles.row_center} textAlign={'center'}>
                <IconButton  sx={{
                    color:'red',
                    width:70, height:70,

                }}>
                    <Google sx={{width:'100%', height:'100%'}}/>
                </IconButton>
                <Box width={5} height={'100%'}/>
                <IconButton  sx={{
                    color:blue_0A,
                     width:70, height:70,

                }}>
                    <FacebookOutlined sx={{width:'100%', height:'100%'}}/>
                </IconButton>
            </Box>
        </Box>
    )

}