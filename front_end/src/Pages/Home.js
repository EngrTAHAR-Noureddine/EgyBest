import React from 'react';
import {Box} from '@mui/material'
import {Custom_Carrousel} from "../Themes/Elements/Carousel";
import {MovieCardsChain} from "../Components/MovieCardsChain";
import {ANIME, LATEST_ADDITIONS, MOST_WATCHED, MOVIES, SERIES, WWE} from "../Themes/String/String_eng";


function Home() {
    const list = [1,2,3,4,5,6];
    return (
        <Box sx={{height:'auto',flexGrow: 1, padding:0,margin:0}}>
            <Custom_Carrousel/>
            <Box sx={{height:'auto',flexGrow: 1, padding:0,margin:0}}>
                <MovieCardsChain list={list} item={LATEST_ADDITIONS}/>
                <MovieCardsChain list={list} item={MOST_WATCHED}/>
                <MovieCardsChain list={list} item={MOVIES}/>
                <MovieCardsChain list={list} item={SERIES}/>
                <MovieCardsChain list={list} item={ANIME}/>
                <MovieCardsChain list={list} item={WWE}/>
            </Box>
        </Box>

    )
}



export default Home