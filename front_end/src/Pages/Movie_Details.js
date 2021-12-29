import { Box} from "@mui/material";
import dark from "../Asset/dark.jpg";
import React from "react";
import {
    ACTOR,
    COMMENTS,
    COMMENTS_NOT_EXIST,
    EPISODES,
    SEASONS,
    STORY,
} from "../Themes/String/String_eng";
import {Header_Movie_Details} from "../Components/Header_Movie_Details";
import {Detail_movie} from "../Components/detail_movie";
import {AvatarActor} from "../Themes/Elements/Avatar_Actor";
import {SectionDetail} from "../Components/section_detail";
import {CONTAINER_NUMBER_BUTTON} from "../Themes/Elements/Buttons";
import {WatchDownloadMovie} from "../Themes/Elements/movie_watch_&_ download_section";
import {TYPOGRAPHY_NOT_EXIST} from "../Themes/Styles/Typographies";
import {RatingUser} from "../Components/Rate_user";
import {CommentUser} from "../Themes/Elements/Comment_user";


export function Movie_Details(prop) {
    const list  = [1,2,3,4,5,6];
    return(
        <Box flexGrow={1} width={'100%'} height={'100%'}>
            <Header_Movie_Details
                                    title={prop.selector.name} rating={prop.selector.rate}
                                    story={(prop.isArabic)?prop.selector.storyAR:prop.selector.story}
                                    image={prop.selector.bigPicture}/>


            <RatingUser signedIn={prop.signedIn}/>




            <Detail_movie />

            <SectionDetail title={ACTOR}>
                {list.map((item)=>(

                    <AvatarActor item={item}/>

                ))}
            </SectionDetail>

            <SectionDetail title={SEASONS}>
                {list.map((item)=>(

                   <CONTAINER_NUMBER_BUTTON item={item}/>

                ))}
            </SectionDetail>
            <SectionDetail title={EPISODES}>
                {list.map((item)=>(

                    <CONTAINER_NUMBER_BUTTON item={item}/>

                ))}
            </SectionDetail>

            <WatchDownloadMovie/>

           <CommentUser/>

            <SectionDetail title={COMMENTS}>
                <TYPOGRAPHY_NOT_EXIST text={COMMENTS_NOT_EXIST}/>
            </SectionDetail>

        </Box>
    )
}