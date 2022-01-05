import {Box} from "@mui/material";
import {flex_styles} from "../Themes/Styles/styles";
import {NEXT_PLAY_BUTTON} from "../Themes/Elements/Buttons";
import {PlayVideo} from "../Themes/Elements/play_video";
import AspectRatioBox from "./AspectRatioBox";
export function VideoPlay(prop) {
    return(
        <Box  flexGrow={1}
              height={'auto'}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
            >
            <Grid_Play_Video linkMovie={prop.linkMovie}/>
            <Previous_next_button episodes={prop.episodes} next={prop.next} previous={prop.previous}/>
        </Box>
    )

}

function Grid_Play_Video(prop) {
    return(

        <AspectRatioBox ratio={16/9}>
            <PlayVideo url={prop.linkMovie}/>
        </AspectRatioBox>

    )

}

function Previous_next_button(prop) {

    return(

            <Box flexGrow={1} height={'auto'} style={flex_styles.row_space_btn} mt={2}>

                    {(prop.episodes)?<NEXT_PLAY_BUTTON item={prop.previous}/>:<div></div>}

                    {(prop.episodes)?<NEXT_PLAY_BUTTON item={prop.next}/>:<div></div>}

            </Box>

    )
}