import {white_10} from "../Styles/Color";
import {Box, Grid} from "@mui/material";
import {ListDownload} from "../../Components/list_download";
import {VideoPlay} from "../../Components/Video_play";
import React from "react";

export function WatchDownloadMovie() {
    const list  = [1,2,3,4,5,6];
    return(
        <Box flexGrow={1} mx={5} height={{xs:'90vh',lg:'70vh'}} bgcolor={white_10} borderRadius={5}>
            <Grid container xs={12}
                  width={'100%'}
                  height={'100%'}
                  direction={{xs:'column', lg:'row'}}
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  sx={{flexWrap: 'wrap'}}

            >
                <Grid item height={'100%'} width={'100%'} xs={3} sm={3} lg={3} xl={2}>
                    <ListDownload list={list}/>
                </Grid>
                <Grid item  height={'100%'} width={'100%'} xs={9} sm={9} lg={9} xl={10}>
                    <VideoPlay/>
                </Grid>
            </Grid>
        </Box>
    )

}