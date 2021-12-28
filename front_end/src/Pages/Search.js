import {Box, Grid} from "@mui/material";
import {Seperator_Bar} from "../Themes/Elements/Seperator_Bar";
import Result_List from "../Components/Result_List";
import {flex_styles} from "../Themes/Styles/styles";
import {SEARCH} from "../Themes/String/String_eng";
import {TYPOGRAPHY_SEARCH_RESULT} from "../Themes/Styles/Typographies";
import {white_EC} from "../Themes/Styles/Color";

export default function Search() {
    const list = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0];
    return(
        <Box>

            <Seperator_Bar/>
            <Box flexWrap={1} height={'10vh'} mb={5}>
            <Grid container xs={12} height={'auto'} style={flex_styles.row_left} borderBottom={1} borderColor={white_EC}>

                <Grid item xs={4} lg={3} height={'inherit'} style={flex_styles.col_down} pl={1}>
                    <TYPOGRAPHY_SEARCH_RESULT item={SEARCH} Weight={'bolder'}/>
                </Grid>
                <Grid item xs={8} lg={9} height={'inherit'} pr={1}>
                    <TYPOGRAPHY_SEARCH_RESULT item={'blacklist'} Weight={'normal'}/>
                </Grid>

            </Grid>
            </Box>
            <Result_List list={list}/>

        </Box>
    )

}