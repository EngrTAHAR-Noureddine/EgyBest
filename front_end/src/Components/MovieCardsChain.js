import {Grid, Typography} from "@mui/material";
import {MovieCard} from "../Themes/Elements/MovieCard";
import {flex_styles} from "../Themes/Styles/styles";
import {divider_B1, white_100} from "../Themes/Styles/Color";
import {MORE_BUTTON} from "../Themes/Elements/Buttons";
import String from '../Themes/String/String';
import {AmiriFont} from "../Themes/Fonts/Fonts";


export function MovieCardsChain(prop) {
    const string = new String(prop.isArabic);
    return(
        <Grid container xs={12} flexGrow={1} style={flex_styles.row_center} px={2} mb={5}>

            <Grid item xs={12} flexGrow={1} height={"5vh"} style={flex_styles.row_left}>

                <Grid container xs={12} display={'flex'} flexDirection={string.ROW_REVERSE()} px={2} sx={{ borderBottom:2,borderBottomColor:divider_B1}}>

                    <Grid item xs={10} height={"100%"} style={(prop.isArabic)?flex_styles.row_right:flex_styles.row_left}>
                        <Typography variant={'h6'} fontFamily={AmiriFont} style={flex_styles.col_center} color={white_100}>
                            {prop.item}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} height={"100%"} style={(prop.isArabic)?flex_styles.row_left:flex_styles.row_right}>
                        <MORE_BUTTON isArabic={prop.isArabic} link={prop.linkMore} more={string.MORE()}/>
                    </Grid>

                </Grid>
            </Grid>

            <Grid item xs={12} flexGrow={1} height={"auto"} p={1}>

                <Grid container xs={12} flexGrow={1} spacing={2} style={flex_styles.row_center}>
                    {

                        prop.list.map((item)=>(
                            <Grid item xs={12} sm={6} md={4} xl={2} style={flex_styles.row_center}>
                                <MovieCard selectorClicker={prop.selectorClicker} item={item}/>
                            </Grid>))

                    }
                </Grid>

            </Grid>

        </Grid>
    )
}