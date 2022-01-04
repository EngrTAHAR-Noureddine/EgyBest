import { Box, Container} from "@mui/material";
import React from "react";
import {Header_Movie_Details} from "../Components/Header_Movie_Details";
import {Detail_movie} from "../Components/detail_movie";
import {SectionDetail} from "../Components/section_detail";
import {WatchDownloadMovie} from "../Themes/Elements/movie_watch_&_ download_section";
import {RatingUser} from "../Components/Rate_user";
import {CommentUser} from "../Themes/Elements/Comment_user";
import String from '../Themes/String/String';
import AddToLibrary from "../Components/add_to_library";
import EpisodesCaroussel from "../Components/episode_caroussel";
import ActorsCaroussel from "../Components/actor_caroussel";
import {flex_styles} from "../Themes/Styles/styles";
import Comments from "../Components/Comments";
import CardCaroussel from "../Components/card_caroussel";




export function Movie_Details(prop) {
    const string = new String(prop.isArabic);
    const funActor = ()=>{
        console.log('Movie detail : ',prop.selector);
        if(prop.selector.actors){
        return(
            <ActorsCaroussel list={prop.selector.actors} selectorActor={prop.selectorActor} />
        )}else return (<div></div>)
    }
    const funSeason = ()=>{
        if(prop.selector.seasons){
            return(
                <SectionDetail title={string.SEASONS()}
                               alignement={string.JUSTIFY_DIRECTION()}>

                    <EpisodesCaroussel list={prop.selector.seasons}/>

                </SectionDetail>
            )
        }else return (<div></div>)
    }
    const funEpisode = ()=>{
        if(prop.selector.episodes){
            return(
                <SectionDetail  title={string.EPISODES()} alignement={string.JUSTIFY_DIRECTION()}>
                    <EpisodesCaroussel list={prop.selector.episodes}/>
                </SectionDetail>
            )}else return (<div></div>)
    }
    const funSimular = ()=>{
        if(prop.selector.similar){
            return(
                <SectionDetail  title={string.SIMILAR()} alignement={string.JUSTIFY_DIRECTION()}>

                    <Box flexGrow={1} height={'fit-content'} p={1} style={flex_styles.row_center}>
                        <CardCaroussel list={prop.selector.similar}/>
                    </Box>

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

            <AddToLibrary isArabic={prop.isArabic}
                          watch_together={string.WATCH_TOGETHER()}
                          signedIn={prop.signedIn}
                          Add_In_Library={string.ADD_INTO_LIBRARY()}
                          added_In_library={string.ADDED_INTO_LIBRARY()}
                            />

            <Detail_movie isArabic={prop.isArabic} item={prop.selector}/>
            <SectionDetail title={string.ACTOR()} alignement={string.JUSTIFY_DIRECTION()}>
                {funActor()}
            </SectionDetail>


                {funSeason()}



                {funEpisode()}


            <WatchDownloadMovie episodes={prop.selector.episodes}  isArabic={prop.isArabic} items={['1080p','720p','480p']} movie={prop.selector.linkMovie}/>
            {funSimular()}
            <CommentUser signedIn={prop.signedIn} comment={string.COMMENT()} alignement={string.JUSTIFY_DIRECTION()}/>

            <SectionDetail title={string.COMMENTS()} alignement={string.JUSTIFY_DIRECTION()}>

               <Container maxWidth={'xl'} p={10} sx={{height:'auto'}}>

                   <Box flexGrow={1}  height={'2vh'}/>
                   <Comments/>
                   <Box flexGrow={1}  height={'2vh'}/>

               </Container>


            </SectionDetail>
        </Box>
    )
}

