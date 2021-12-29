import {Box, Grid} from "@mui/material";
import {Seperator_Bar} from "../Themes/Elements/Seperator_Bar";
import Result_List from "../Components/Result_List";
import {flex_styles} from "../Themes/Styles/styles";
import {TYPOGRAPHY_PAGE_NOT_FOUND, TYPOGRAPHY_SEARCH_RESULT} from "../Themes/Styles/Typographies";
import {white_EC} from "../Themes/Styles/Color";
import String from '../Themes/String/String';

export default function Search(prop) {
    const string = new String(prop.isArabic);
    return(
        <Box>

            <Seperator_Bar/>
            <Box flexWrap={1} height={'10vh'} mb={5}>
            <Grid container xs={12} height={'auto'}
                  display={'flex'}
                  justifyContent={'left'}
                  flexDirection={string.ROW_REVERSE()}
                  borderBottom={1} borderColor={white_EC}>

                <Grid item xs={4} lg={3} height={'inherit'} style={flex_styles.col_down} px={1}>
                    <TYPOGRAPHY_SEARCH_RESULT alignement={string.JUSTIFY_DIRECTION()} item={string.SEARCH()} Weight={'bolder'}/>
                </Grid>
                <Grid item xs={8} lg={9} height={'inherit'} px={1}>
                    <TYPOGRAPHY_SEARCH_RESULT alignement={string.JUSTIFY_DIRECTION()} item={prop.wordSearch} Weight={'normal'}/>
                </Grid>

            </Grid>
            </Box>
            {
                (prop.list && (prop.list.length>0))?<Result_List list={prop.list}/>:<TYPOGRAPHY_PAGE_NOT_FOUND title={string.NOT_FOUND()}/>
            }


        </Box>
    )

}