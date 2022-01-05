import {Box, Grid} from "@mui/material";
import {flex_styles} from "../Themes/Styles/styles";
import {MovieCard} from "../Themes/Elements/MovieCard";
import React from "react";
import { TYPOGRAPHY_TIME_LATEST_VUES} from "../Themes/Styles/Typographies";
import {white_10} from "../Themes/Styles/Color";

export default function LATEST_VUES_List(prop){
    return (
        <Box sx={{height:'auto',flexGrow: 1, padding:1,margin:0}} style={flex_styles.row_center}>
            <Grid container height={'inherit'} width={'inherit'} xs={12} flexGrow={1} spacing={3} style={flex_styles.row_center}>
                {

                    prop.list.map((item)=>(
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}
                              style={flex_styles.col_center}
                        >
                            <MovieCard selectorClicker={prop.selectorClicker} item={item}/>
                            <Box height={'auto'} width={250} borderRadius={2} bgcolor={white_10} mt={1}>
                                <TYPOGRAPHY_TIME_LATEST_VUES title={'10 min'}/>
                            </Box>
                        </Grid>))

                }
            </Grid>
        </Box>)
}