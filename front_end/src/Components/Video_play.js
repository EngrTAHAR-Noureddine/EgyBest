import {Box, Grid} from "@mui/material";
import {flex_styles} from "../Themes/Styles/styles";
import {NEXT_PLAY_BUTTON} from "../Themes/Elements/Buttons";
import {NEXT, PREVIOUS} from "../Themes/String/String_eng";
import {PlayVideo} from "../Themes/Elements/play_video";
export function VideoPlay() {
    return(
        <Grid container xs={12}
              width={'100%'}
              height={'100%'}
              direction={'column'}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
            <Grid_Play_Video/>
            <Previous_next_button/>
        </Grid>
    )

}

function Grid_Play_Video() {
    return(
        <Grid item xs={10} xl={11} width={'100%'} height={'100%'} style={flex_styles.col_center} alignItems={'center'}>
        <Box width={'90%'} height={'90%'} bgcolor={'whitesmoke'} >
            <PlayVideo url={"https://www.youtube.com/embed/IeiJO1eUEiU"}/>
        </Box>
        </Grid>
    )

}

function Previous_next_button() {

    return(
        <Grid item xs={2} xl={1} width={'100%'} height={'100%'}>
            <Grid container xs={12} flexGrow={1} height={'100%'} style={flex_styles.row_center}>
                <Grid item xs={3} style={flex_styles.col_center} alignItems={'center'}>
                    <NEXT_PLAY_BUTTON item={PREVIOUS}/>
                </Grid>
                <Grid item xs={5} />
                <Grid item xs={3}  style={flex_styles.col_center} alignItems={'center'}>
                    <NEXT_PLAY_BUTTON item={NEXT}/>
                </Grid>
            </Grid>
        </Grid>
    )
}