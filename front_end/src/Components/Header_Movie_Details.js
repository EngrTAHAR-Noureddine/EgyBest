import {Box, Grid} from "@mui/material";
import {flex_styles} from "../Themes/Styles/styles";
import {IMAGE} from "../Themes/Elements/IMAGE";
import dark from "../Asset/dark.jpg";
import {black_60} from "../Themes/Styles/Color";
import {TYPOGRAPHY_STORY, TYPOGRAPHY_TITLE_MOVIE} from "../Themes/Styles/Typographies";
import {RATING_DISABLED_BUTTON} from "../Themes/Elements/Buttons";
import {STORY} from "../Themes/String/String";
import React from "react";

export function Header_Movie_Details(prop) {

    return (
        <Box flexGrow={1} width={'100%'} height={{xs:'50vh',sm:'60vh'}} style={flex_styles.row_center}>
            <IMAGE url={prop.image}/>
            <Box zIndex={5} height={"100%"} width={"100%"} sx={{ flexGrow: 1,backgroundColor:black_60}}>
                <Grid container xs={12} pr={5} height={'100%'} style={flex_styles.row_left}>
                    <Grid item xs={1} sm={2} md={2} lg={6} xl={6} height={'100%'} />
                    <Grid item xs={10} sm={10} md={10} lg={6} xl={6} height={'100%'} >
                        <Grid container xs={12} width={'100%'} height={'100%'}
                              direction='column' justifyContent='center' alignItems='center'>
                            <Grid item xs={3} width={'inherit'}/>
                            <Grid item xs={8} width={'inherit'} bgcolor={black_60} borderRadius={5}>
                                <Grid container xs={12} width={'100%'} height={'100%'}
                                      direction='column' justifyContent='center' alignItems='center'>
                                    <Grid item xs={3} width={'100%'} px={2} style={flex_styles.row_right}>
                                        <Grid container xs={12} height={"100%"} style={flex_styles.row_center}>
                                            <Grid item xs={9} md={11}>
                                                <TYPOGRAPHY_TITLE_MOVIE item={prop.title}/>
                                            </Grid>
                                            <Grid item xs={3} md={1} style={flex_styles.row_right}>
                                                <RATING_DISABLED_BUTTON item={prop.rating}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={8} width={'inherit'} p={2}>
                                        <TYPOGRAPHY_STORY item={prop.story}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )

}