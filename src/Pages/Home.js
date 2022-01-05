import React from 'react';
import {Box} from '@mui/material'
import {Custom_Carrousel} from "../Themes/Elements/Carousel";
import {MovieCardsChain} from "../Components/MovieCardsChain";
import String from '../Themes/String/String';


function Home(prop) {
    const string = new String(prop.isArabic);

    return (
        <Box sx={{height:'auto',flexGrow: 1, padding:0,margin:0}}>
            <Custom_Carrousel list={prop.listMovies.slice(0,6)} selectorClicker={prop.selectorClicker}/>
            <Box sx={{height:'auto',flexGrow: 1, padding:0,margin:0}}>
                <MovieCardsChain    selectorClicker={prop.selectorClicker}
                                    linkMore={'/EgyBest/list-movies'}
                                    isArabic={prop.isArabic}
                                    list={prop.listMovies} item={string.LATEST_ADDITIONS()}/>
                <MovieCardsChain    selectorClicker={prop.selectorClicker}
                                    isArabic={prop.isArabic}
                                    linkMore={'/EgyBest/list-movies'}
                                    list={prop.listMovies} item={string.MOST_WATCHED()}/>
                <MovieCardsChain    selectorClicker={prop.selectorClicker}
                                    isArabic={prop.isArabic}
                                    linkMore={'/EgyBest/list-movies'}
                                    list={prop.listMovies} item={string.MOVIES()}/>
                <MovieCardsChain    selectorClicker={prop.selectorClicker}
                                    isArabic={prop.isArabic}
                                    linkMore={'/EgyBest/list-series'}
                                    list={prop.listSeries} item={string.SERIES()}/>
                <MovieCardsChain    selectorClicker={prop.selectorClicker}
                                    isArabic={prop.isArabic}
                                    linkMore={'/EgyBest/list-theaters'}
                                    list={prop.listTheaters} item={string.THEATER()}/>
                <MovieCardsChain    selectorClicker={prop.selectorClicker}
                                    isArabic={prop.isArabic}
                                    linkMore={'/EgyBest/list-wwe'}
                                    list={prop.listWWE} item={string.WWE()}/>
            </Box>
        </Box>

    )
}



export default Home