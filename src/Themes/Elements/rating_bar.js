import {Box, IconButton} from "@mui/material";
import {CircleRounded} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import {blue_0A, white_30} from "../Styles/Color";

export function RatingBar(prop) {

    const [rate, setRate] = useState(1);
    let [point, setPoint] = useState(
        ["false","false","false","false","false","false","false","false","false","false"]
    );

    function changeToTrue(array,to) {
        let arr = [...array];
        arr.map((t,i)=>{
            if((i+1)<=to){ arr[i] = "true";} else arr[i] = "false";
        })
        return arr;
    }
    function changeToTrueSecond(array,to) {
        let arr = [...array];
        arr.map((t,i)=>{
            if(i<=to){ arr[i] = "true";} else arr[i] = "false";
        })
        return arr;
    }

    const onCLicked = (index)=>{
        setRate(index);
        const items = changeToTrueSecond(point, rate);
        setPoint(items);
    };
    const mouseEnter = (index) => {
        const items = changeToTrueSecond(point, index);
        setPoint(items);
    }
    const mouseLeave = (index) => {
        const items = changeToTrueSecond(point, rate);
        setPoint(items);
    }
    //happen once
    useEffect(() => {
        const t = parseInt(prop.rate);
        console.log('t :',t);
        const items = changeToTrue(point, t);
        setPoint(items);
    }, []);

    window.onload = ev => {
        setRate(parseInt(prop.rate));
        const items = changeToTrue(point, parseInt(prop.rate));
        setPoint(items);
    }
    return(
        <Box width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'}
             flexDirection={(prop.reverse)?'row-reverse':'row'} alignItems={'center'}>

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