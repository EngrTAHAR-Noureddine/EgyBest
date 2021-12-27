import Carousel from "react-material-ui-carousel";
import React from "react";
import { Box, Paper} from "@mui/material";
import dark from '../../Asset/dark.jpg';
import suits02 from '../../Asset/suits02.jpg';
import suits from '../../Asset/Suits.jpg';
import hitman from '../../Asset/hitmans-wifes.jpg';
import notime from '../../Asset/no-time-to-die.jpg';
import hannibal from '../../Asset/hannibal.jpg';
import {IMAGE} from "./IMAGE";
import {black_60} from "../Styles/Color";

export  const Custom_Carrousel = () => {

    const items = [
        {
            url: dark,

        },
        {
            url: hannibal,

        },
        {
            url: suits,

        },
        {
            url: hitman,

        },
        {
            url: notime,

        },
        {
            url: suits02,

        }
    ]

    return (
        <Carousel animation={'slide'} autoPlay={true}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    );

};

function Item(props)
{
    return (
        <Paper

            sx={{
                flexGrow: 1,
                height:'50vh',
                width:'100%',
                backgroundColor:'transparent',
            }}>
            <Box
                position={'absolute'}
                zIndex={5}
                height={"100%"}
                width={"100%"}
                sx={{
                    flexGrow: 1,
                    backgroundColor:black_60,
                }}  />
            <IMAGE url={props.item.url}/>

        </Paper>
    )
}