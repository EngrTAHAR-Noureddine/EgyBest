import {Box, Grid, IconButton, Typography} from "@mui/material";
import {flex_styles} from "../Themes/Styles/styles";
import {white_10, white_100} from "../Themes/Styles/Color";
import String from '../Themes/String/String';
import CardCaroussel from "./card_caroussel";
import {Add} from "@mui/icons-material";
import {CustomSingleton} from "../Themes/Styles/Typographies";


export function MovieCardsChain(prop) {
    const string = new String(prop.isArabic);
    return(
        <Box flexGrow={1} height={'auto'} px={{xs:1, xl:5}} mb={5} mt={2}>
        <Grid container xs={12} flexGrow={1} style={flex_styles.row_center} sx={{backgroundColor:white_10, borderRadius:10}}>

            <Grid item xs={12} flexGrow={1} height={"5vh"} style={flex_styles.row_left} mb={5}>

                <Grid container xs={12} display={'flex'} flexDirection={string.ROW_REVERSE()}
                     mt={1}>
                    <Grid item xs={2} height={"100%"}>

                    </Grid>
                    <Grid item xs={8} height={"100%"}
                          style={flex_styles.row_center}>
                        <Typography variant={'h5'} fontFamily={CustomSingleton.getIt()} style={flex_styles.col_center}
                                    color={white_100}
                                    >
                            {prop.item}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} height={"100%"} style={(prop.isArabic)?flex_styles.row_left:flex_styles.row_right} px={{xs:1, sm:2, xl:5}}>
                        <IconButton href={prop.linkMore}>
                            <Add sx={{color:white_100, fontSize:30}}/>
                        </IconButton>
                    </Grid>

                </Grid>
            </Grid>

            <Grid item xs={12} flexGrow={1} height={"auto"} p={1}>
                <CardCaroussel list={prop.list} isArabic={prop.isArabic} iselectorClicker={prop.selectorClicker}/>
            </Grid>

        </Grid>
        </Box>
    )
}
