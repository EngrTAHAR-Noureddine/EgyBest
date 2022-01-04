import {Box, Container} from "@mui/material";
import {flex_styles} from "../Themes/Styles/styles";
import {IMAGE} from "../Themes/Elements/IMAGE";
import {black_60} from "../Themes/Styles/Color";
import {TYPOGRAPHY_STORY, TYPOGRAPHY_TITLE_MOVIE} from "../Themes/Styles/Typographies";
import {RATING_DISABLED_BUTTON} from "../Themes/Elements/Buttons";
import React from "react";

export function Header_Movie_Details(prop) {

    return (
        <Box flexGrow={1} width={'100%'} height={{xs:'50vh',sm:'60vh'}} style={flex_styles.row_center}>
            <IMAGE url={prop.image}/>
            <Box zIndex={5} height={"100%"} width={"100%"} sx={{position:'relative', flexGrow: 1,backgroundColor:black_60}}>
                <Container maxWidth={'md'}
                           sx={{height:'auto',position:'absolute',
                               backgroundColor:black_60, borderRadius:5,
                               right:{xs:1,sm:5, md:10, lg:15,xl:20}, bottom:{xs:1,sm:5, md:10, lg:15,xl:20},
                               }} >
                    <Box flexGrow={1} style={flex_styles.row_space_btn}>
                        <TYPOGRAPHY_TITLE_MOVIE item={prop.title}/>
                        <RATING_DISABLED_BUTTON item={prop.rating}/>
                    </Box>
                    <Box p={{xs:0,sm:1, md:1, lg:2,xl:5}}>
                    <TYPOGRAPHY_STORY item={prop.story}/>
                    </Box>
                </Container>
            </Box>
        </Box>
    )

}
