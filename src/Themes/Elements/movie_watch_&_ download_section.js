import {white_10} from "../Styles/Color";
import {Box, Grid} from "@mui/material";
import {ListDownload} from "../../Components/list_download";
import {VideoPlay} from "../../Components/Video_play";
import React from "react";
import String from '../String/String';

export function WatchDownloadMovie(prop) {
    const list  = [1,2,3,4,5,6];
    const string = new String(prop.isArabic);
    return(
        <Box flexGrow={1} mx={5} height={{xs:'90vh',lg:'70vh'}} bgcolor={white_10} borderRadius={5}>
            <Grid container xs={12}
                  width={'100%'}
                  height={'100%'}
                  direction={{xs:'column', lg:string.ROW_REVERSE()}}
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  sx={{flexWrap: 'wrap'}}

            >
                <Grid item height={'100%'} width={'100%'} xs={3} sm={3} lg={3} xl={2}>
                    <ListDownload isArabic={prop.isArabic} download={string.DOWNLOAD()} watchtogether={string.WATCH_TOGETHER()} list={prop.items}/>

                </Grid>
                <Grid item  height={'100%'} width={'100%'} xs={9} sm={9} lg={9} xl={10}>
                    <VideoPlay episodes={prop.episodes} linkMovie={prop.movie} next={string.NEXT()} previous={string.PREVIOUS()}/>
                </Grid>
            </Grid>
        </Box>
    )

}