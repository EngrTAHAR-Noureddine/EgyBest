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
                                    linkMore={'/list-movies'}
                                    isArabic={prop.isArabic}
                                    list={prop.listMovies.slice(4,10)} item={string.LATEST_ADDITIONS()}/>
                <MovieCardsChain    selectorClicker={prop.selectorClicker}
                                    isArabic={prop.isArabic}
                                    linkMore={'/list-movies'}
                                    list={prop.listMovies.slice(2,8)} item={string.MOST_WATCHED()}/>
                <MovieCardsChain    selectorClicker={prop.selectorClicker}
                                    isArabic={prop.isArabic}
                                    linkMore={'/list-movies'}
                                    list={prop.listMovies.slice(0,6)} item={string.MOVIES()}/>
                <MovieCardsChain    selectorClicker={prop.selectorClicker}
                                    isArabic={prop.isArabic}
                                    linkMore={'/list-series'}
                                    list={prop.listSeries} item={string.SERIES()}/>
                <MovieCardsChain    selectorClicker={prop.selectorClicker}
                                    isArabic={prop.isArabic}
                                    linkMore={'/list-theaters'}
                                    list={prop.listTheaters} item={string.THEATER()}/>
                <MovieCardsChain    selectorClicker={prop.selectorClicker}
                                    isArabic={prop.isArabic}
                                    linkMore={'/list-wwe'}
                                    list={prop.listWWE} item={string.WWE()}/>
            </Box>
        </Box>

    )
}



export default Home