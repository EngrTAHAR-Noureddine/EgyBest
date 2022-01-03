import {Box, Grid} from "@mui/material";
import {flex_styles} from "../Themes/Styles/styles";
import {NEXT_PLAY_BUTTON} from "../Themes/Elements/Buttons";
import {PlayVideo} from "../Themes/Elements/play_video";
export function VideoPlay(prop) {
    return(
        <Grid container xs={12}
              width={'100%'}
              height={'100%'}
              direction={'column'}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
            <Grid_Play_Video linkMovie={prop.linkMovie}/>
            <Previous_next_button episodes={prop.episodes} next={prop.next} previous={prop.previous}/>
        </Grid>
    )

}

function Grid_Play_Video(prop) {
    return(
        <Grid item xs={10} xl={11} width={'100%'} height={'100%'} style={flex_styles.col_center} alignItems={'center'}>
        <Box width={'90%'} height={'90%'} bgcolor={'whitesmoke'} >
            <PlayVideo url={prop.linkMovie}/>
        </Box>
        </Grid>
    )

}

function Previous_next_button(prop) {

    return(
        <Grid item xs={2} xl={1} width={'100%'} height={'100%'}>
            <Grid container xs={12} flexGrow={1} height={'100%'} style={flex_styles.row_center}>
                <Grid item xs={3} style={flex_styles.col_center} alignItems={'center'}>
                    {(prop.episodes)?<NEXT_PLAY_BUTTON item={prop.previous}/>:<div></div>}
                </Grid>
                <Grid item xs={5} />
                <Grid item xs={3}  style={flex_styles.col_center} alignItems={'center'}>
                    {(prop.episodes)?<NEXT_PLAY_BUTTON item={prop.next}/>:<div></div>}
                </Grid>
            </Grid>
        </Grid>
    )
}