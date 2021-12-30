import { Box} from "@mui/material";
import React from "react";
import {Header_Movie_Details} from "../Components/Header_Movie_Details";
import {Detail_movie} from "../Components/detail_movie";
import {AvatarActor} from "../Themes/Elements/Avatar_Actor";
import {SectionDetail} from "../Components/section_detail";
import {CONTAINER_NUMBER_BUTTON} from "../Themes/Elements/Buttons";
import {WatchDownloadMovie} from "../Themes/Elements/movie_watch_&_ download_section";
import {TYPOGRAPHY_NOT_EXIST} from "../Themes/Styles/Typographies";
import {RatingUser} from "../Components/Rate_user";
import {CommentUser} from "../Themes/Elements/Comment_user";
import String from '../Themes/String/String';




export function Movie_Details(prop) {
    const string = new String(prop.isArabic);


    const funActor = ()=>{
        console.log('Movie detail : ',prop.selector);
        if(prop.selector.actors){
        return(
            prop.selector.actors.map((item)=>(

                <AvatarActor selectorActor={prop.selectorActor} item={item} floatIt={string.JUSTIFY_DIRECTION()}/>

            ))
        )}else return (<div></div>)
    }
    const mapListItems = (list) => (
        list.map((cusItem)=>(

            <CONTAINER_NUMBER_BUTTON item={cusItem} floatIt={string.JUSTIFY_DIRECTION()}/>

        ))
    )
    const funSeason = ()=>{
        if(prop.selector.seasons){
            return(
                <SectionDetail title={string.SEASONS()}
                               alignement={string.JUSTIFY_DIRECTION()}>
                    {mapListItems(prop.selector.seasons)}

                </SectionDetail>
            )
        }else return (<div></div>)
    }
    const funEpisode = ()=>{
        if(prop.selector.episodes){
            return(
                <SectionDetail  title={string.EPISODES()} alignement={string.JUSTIFY_DIRECTION()}>
                    {mapListItems(prop.selector.episodes)}
                </SectionDetail>
            )}else return (<div></div>)
    }

    return(
        <Box flexGrow={1} width={'100%'} height={'100%'}>
            <Header_Movie_Details
                                    title={prop.selector.name} rating={prop.selector.rate}
                                    story={(prop.isArabic)?prop.selector.storyAR:prop.selector.story}
                                    image={prop.selector.bigPicture}/>


            <RatingUser isArabic={prop.isArabic} signedIn={prop.signedIn}
                        rate={(prop.selector.rate)?prop.selector.rate:1}
                        youRating={string.YOUR_RATING()} likeIt={string.LIKE_IT()} hateIt={string.HATE_IT()}/>


            <Detail_movie isArabic={prop.isArabic} item={prop.selector}/>
            <SectionDetail title={string.ACTOR()} alignement={string.JUSTIFY_DIRECTION()}>
                {funActor()}
            </SectionDetail>


                {funSeason()}



                {funEpisode()}


            <WatchDownloadMovie isArabic={prop.isArabic} items={['1080p','720p','480p']} movie={prop.selector.linkMovie}/>
            <CommentUser signedIn={prop.signedIn} alignement={string.JUSTIFY_DIRECTION()}/>
            <SectionDetail title={string.COMMENTS()} alignement={string.JUSTIFY_DIRECTION()}>
                <TYPOGRAPHY_NOT_EXIST text={string.COMMENTS_NOT_EXIST()}/>
            </SectionDetail>
        </Box>
    )
}
//isDisplay={(prop.selector.episodes)?'flex':'none'}

/*









* */