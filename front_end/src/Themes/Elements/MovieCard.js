import {Box, Card, CardContent, Grid, Link} from "@mui/material";
import React, {useState} from "react";
import {RATING_DISABLED_BUTTON} from "./Buttons";
import {TYPOGRAPHY_CONTENT_CARD_MOVIE} from "../Styles/Typographies";
import {IMAGE} from "./IMAGE";
import {black_60} from "../Styles/Color";
import {flex_styles} from "../Styles/styles";





export function MovieCard(prop) {
    const [state, setState] = useState(false)

    const MouseEnter = () => {
      setState(true)
    }
    const MouseLeave = () => {
        setState(false)
    }

    return(
    <Link href={'/details'}>
        <Card sx={{ width:250, height:400, borderRadius:5 }}>
            <CardContent sx={{height:"inherit", width:"inherit", padding:0, borderRadius:5 }}
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave}
            >

                <Box
                    onClick={()=>prop.selectorClicker(prop.item)}
                    display={(state)?'flex':'none'}
                    borderRadius={5}
                    position={'absolute'}
                    zIndex={5}
                    height={"inherit"}
                    width={"inherit"}
                    sx={{
                        backgroundColor:black_60,
                    }} >
                    <Grid container xs={12}
                          width={'inherit'}
                          direction='column'
                          justifyContent='center'
                          alignItems='center'
                          borderRadius={5}
                    >
                        <Grid item xs={2} width={'inherit'} style={flex_styles.row_right} px={1}>
                            <RATING_DISABLED_BUTTON item={prop.item.rate}/>
                        </Grid>
                        <Grid item xs={8} width={'inherit'}
                              style={flex_styles.col_center}
                              p={1}>

                            <TYPOGRAPHY_CONTENT_CARD_MOVIE item={prop.item.name}/>
                        </Grid>
                        <Grid item xs={2} width={'inherit'} style={flex_styles.row_center}>
                            <TYPOGRAPHY_CONTENT_CARD_MOVIE item={prop.item.year}/>
                        </Grid>

                    </Grid>
                </Box>

                <IMAGE url={prop.item.coverPicture}/>
            </CardContent>

        </Card>
    </Link>

    )
}

