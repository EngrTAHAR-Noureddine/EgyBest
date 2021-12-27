import {Box} from "@mui/material";
import {flex_styles} from "../Themes/Styles/styles";
import {grey_36, white_30} from "../Themes/Styles/Color";
import {TYPOGRAPHY_SEARCH_RESULT} from "../Themes/Styles/Typographies";

export function SectionDetail(prop){
    return(
        <Box flexGrow={1} m={1} mx={5} height={'auto'}>
            <Box flexGrow={1} height={{xs:'10vh',lg:'5vh'}} style={flex_styles.col_center} px={2} bgcolor={grey_36}
                 sx={{borderTopRightRadius:10,borderTopLeftRadius:10}}>
                <TYPOGRAPHY_SEARCH_RESULT item={prop.title}/>
            </Box>

            <Box width={'100%'} height={'auto'} bgcolor={white_30}
                 sx={{borderBottomRightRadius:10,borderBottomLeftRadius:10,display:'inline-block'}}

            >

                {prop.children}

            </Box>


        </Box>
    )
}