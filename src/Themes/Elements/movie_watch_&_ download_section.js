import {white_10} from "../Styles/Color";
import {Box, Container} from "@mui/material";
import {ListDownload} from "../../Components/list_download";
import {VideoPlay} from "../../Components/Video_play";
import React from "react";
import String from '../String/String';

export function WatchDownloadMovie(prop) {
    const list  = [1,2,3,4,5,6];
    const string = new String(prop.isArabic);
    return(
        <Box flexGrow={1} mx={5} mb={5} height={'fit-content'} bgcolor={white_10}  borderRadius={5}>
            <Box   flexGrow={1}
                  height={'fit-content'}
                   display={'flex'}
                  flexDirection={{xs:'column', lg:string.ROW_REVERSE()}}
                  justifyContent={'center'}
                  sx={{flexWrap: 'wrap'}}
            >
                <Box flexGrow={1} height={'auto'}>
                    <ListDownload isArabic={prop.isArabic} download={string.DOWNLOAD()} watchtogether={string.WATCH_TOGETHER()} list={prop.items}/>
                </Box>
                <Container sx={{flexGrow:3, height:'auto',pt:{xs:1,xl:5}, pb:{xs:1,xl:5}}}>

                        <VideoPlay episodes={prop.episodes} linkMovie={prop.movie} next={string.NEXT()} previous={string.PREVIOUS()}/>

                </Container>
            </Box>
        </Box>
    )

}
