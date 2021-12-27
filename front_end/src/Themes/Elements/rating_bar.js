import {Box, IconButton} from "@mui/material";
import {CircleRounded} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import {flex_styles} from "../Styles/styles";
import {blue_0A, white_30} from "../Styles/Color";

export function RatingBar(prop) {

    const [rate, setRate] = useState(8);
    let [point, setPoint] = useState(
        ["false","false","false","false","false","false","false","false","false","false"]
    );

    function changeToTrue(array,to) {
        let arr = [...array];
        arr.map((t,i)=>{
            if(i<=to){ arr[i] = "true";} else arr[i] = "false";
        })
        return arr;
    }

    const onCLicked = (index)=>{
        setRate(index);
        const items = changeToTrue(point, rate);
        setPoint(items);
    };
    const mouseEnter = (index) => {
        const items = changeToTrue(point, index);
        setPoint(items);
    }
    const mouseLeave = (index) => {
        const items = changeToTrue(point, rate);
        setPoint(items);
    }
    //happen once
    useEffect(() => {
        const items = changeToTrue(point, rate);
        setPoint(items);
    }, []);


    return(
        <Box width={'100%'} height={'100%'} style={flex_styles.row_center} alignItems={'center'}>

            {
                point.map((item,index)=>(
                    <IconButton onMouseEnter={()=>mouseEnter(index)}
                                onMouseLeave={()=>mouseLeave(index)}
                                onClick={()=>onCLicked(index)} key={index}>
                        <CircleRounded sx={{color:(item==="true")?blue_0A:white_30}}/>
                    </IconButton>
                ))
            }

        </Box>
    )

}