import {Box, Grid, Typography} from "@mui/material";
import {flex_styles} from "../Styles/styles";
import {grey_36, white_100, white_80} from "../Styles/Color";
import {useEffect, useState} from "react";

export function ScoreCounter(prop) {
    const [number,setNumber] = useState(1);

    const increment =()=>{
        if(number<10) setNumber(number+1);
    }
    const decrement =()=>{
        if(number>1) setNumber(number-1);
    }
    //happen once
    useEffect(() => {
        setNumber(prop.rate);
    }, []);

    return(
        <Box width={'100%'} height={'100%'}>
            <Grid container style={flex_styles.row_left} xs={12} width={'100%'} height={'100%'}>
                <Grid item component={'button'} width={'100%'} height={'100%'} xs={3}
                      sx={{
                          border: "none",
                          outline: "none",
                          width:'100%',height:'100%',
                          borderRadius:0,fontSize:'2rem',
                          borderTopLeftRadius:10,borderBottomLeftRadius:10,
                          "&,&:hover":{color:white_100, backgroundColor:grey_36}}}
                      >

                        <Typography onClick={increment}>+</Typography>

                </Grid>
                <Grid item width={'100%'} height={'100%'} xs={6} bgcolor={white_80} border={1} borderColor={'black'}
                            style={flex_styles.row_center} alignItems={'center'}>
                    <Typography variant={'h4'} >{number}</Typography>
                    <Typography variant={'h6'} >/10</Typography>


                </Grid>
                <Grid item component={'button'} width={'100%'} height={'100%'} xs={3}
                      sx={{
                          border: "none",
                          outline: "none",
                          width:'100%',height:'100%',
                          borderRadius:0,
                          fontSize:'2rem',
                          borderTopRightRadius:10,borderBottomRightRadius:10,
                          "&,&:hover":{color:white_100, backgroundColor:grey_36}}}
                >

                    <Typography onClick={decrement}>-</Typography>

                </Grid>
            </Grid>
        </Box>
    )

}