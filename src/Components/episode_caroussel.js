import {Box, IconButton} from "@mui/material";
import { ArrowBackIosOutlined, ArrowForwardIos} from "@mui/icons-material";
import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import '../App.css';
import {flex_styles} from "../Themes/Styles/styles";
import {black_1212, white_100} from "../Themes/Styles/Color";
import {CONTAINER_NUMBER_BUTTON} from "../Themes/Elements/Buttons";



function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);

    return (
        <Box style={flex_styles.col_center} >
            <IconButton sx={{width:'fit-content', height:'fit-content', backgroundColor:white_100}}
                        disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
                <ArrowBackIosOutlined sx={{color:black_1212, width:16,height:16}}/>
            </IconButton>
        </Box>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

    return (
        <Box style={flex_styles.col_center} alignItems={'center'}>
            <IconButton sx={{width:'fit-content', height:'fit-content', backgroundColor:white_100}}
                        disabled={isLastItemVisible} onClick={() => scrollNext()}>
                <ArrowForwardIos sx={{color:black_1212, width:16,height:16}}/>
            </IconButton>
        </Box>
    );
}

function CustomCard({ onClick, title, itemId,itemContent }) {
    const visibility = React.useContext(VisibilityContext);

    return (
        <Box
            onClick={() => onClick(visibility)}
            style={{
                width: 'fit-content',
                height:'fit-content'
            }}
            m={1}
            tabIndex={0}
        >
            <CONTAINER_NUMBER_BUTTON item={itemContent} floatIt={'none'}/>
        </Box>
    );
}



export default function EpisodesCaroussel(prop) {

    return(

        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}
                    separatorClassName={'seperatorContent'}
                    itemClassName={'ItemContent'}
                    wrapperClassName={'wrapperContent'} scrollContainerClassName={'centeredItems'}>
            {(prop.list && prop.list.length>0)?prop.list.map((i,id) => (
                <CustomCard itemId={id.toString()} // NOTE: itemId is required for track items
                            title={id.toString()}
                            itemContent={i}
                            key={id.toString()}/>
            )):<div></div>}
        </ScrollMenu>

    )
}

