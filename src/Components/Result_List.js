import {Box, Grid} from "@mui/material";
import {flex_styles} from "../Themes/Styles/styles";
import {MovieCard} from "../Themes/Elements/MovieCard";
import React from "react";

export default function Result_List(prop){
    return (
        <Box sx={{height:'auto',flexGrow: 1, padding:1,margin:0}} style={flex_styles.row_center}>
            <Grid container height={'inherit'} width={'inherit'} xs={12} flexGrow={1} spacing={3} style={flex_styles.row_center}>
                {

                    prop.list.map((item)=>(
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={flex_styles.row_center}>
                            <MovieCard selectorClicker={prop.selectorClicker} item={item}/>
                        </Grid>))

                }
            </Grid>
        </Box>)
}