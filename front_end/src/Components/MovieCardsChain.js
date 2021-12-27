import {Grid, Typography} from "@mui/material";
import {MovieCard} from "../Themes/Elements/MovieCard";
import {flex_styles} from "../Themes/Styles/styles";
import {divider_B1, white_100} from "../Themes/Styles/Color";
import {MORE_BUTTON} from "../Themes/Elements/Buttons";


export function MovieCardsChain(prop) {
    return(
        <Grid container xs={12} flexGrow={1} style={flex_styles.row_center} px={2} mb={5}>

            <Grid item xs={12} flexGrow={1} height={"5vh"} style={flex_styles.row_left}>

                <Grid container xs={12} px={2} sx={{ borderBottom:2,borderBottomColor:divider_B1}}>
                    <Grid item xs={10} height={"100%"} style={flex_styles.row_left}>
                        <Typography variant={'h6'} style={flex_styles.col_center} color={white_100}>
                            {prop.item}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} height={"100%"} style={flex_styles.row_right}>
                        <MORE_BUTTON/>
                    </Grid>

                </Grid>
            </Grid>

            <Grid item xs={12} flexGrow={1} height={"auto"} p={1}>

                <Grid container xs={12} flexGrow={1} spacing={2} style={flex_styles.row_center}>
                    {

                        prop.list.map(()=>(
                            <Grid item xs={12} sm={6} md={4} xl={2} style={flex_styles.row_center}>
                                <MovieCard/>
                            </Grid>))

                    }
                </Grid>

            </Grid>

        </Grid>
    )
}