import {flex_styles} from "../Themes/Styles/styles";
import {Box, Grid} from "@mui/material";
import {black_10, white_10} from "../Themes/Styles/Color";
import {FILTER_LIST, LIST_SHORTCUTS} from "../Themes/String/String";
import React, {useState} from "react";
import {SHORTCUT_LIST_BUTTON} from "../Themes/Elements/Buttons";
import {CustomPopUpMenu} from "../Themes/Elements/CustomPopUpMenu";
import {FilterButton} from "./filter_for_mobile";

export default function Menu_Board() {
    const FilterList = FILTER_LIST;
    const [selector,setSelect]=useState({
        Language:'Language',
        Status:'Status',
        Quality:'Quality',
        Year:'Year',
        Country:'Country',
        Category:'Category',
        Type:'Type',
        Translate:'Translate'
    });


    return(
        <Box sx={{height:{xs:'20vh', md:'50vh'},flexGrow: 1, padding:0,margin:0 ,mb:{xs:2, lg:5}}}
             style={flex_styles.row_center} >
            <Box borderRadius={10} sx={{height:{xs:'20vh', md:'50vh'},width:{xs:'70vw', md:'50vw'}, padding:0,margin:0}}>
                <Grid container xs={12} flexGrow={1}
                      borderRadius={10}
                      bgcolor={white_10}
                      height={'100%'}
                      width={'100%'}
                      direction={{xs:'column-reverse',lg:'row'}}
                      justifyContent='center'
                      alignItems='center'>
                    <Filter_List  filterList={FilterList} selector={selector} setSelect={setSelect} />
                    <ListMenu list={LIST_SHORTCUTS} setSelect={setSelect} selector={selector} FilterList={FilterList}/>
                </Grid>
            </Box>
        </Box>
    )
}


function ListMenu(prop){
    return (
        <Grid item  xs={2} lg={4} height={'inherit'} width={'inherit'}
              bgcolor={'transparent'}
              style={flex_styles.col_center}
        >
            <Box height={'80%'} width={'90%'} bgcolor={black_10}
                 mx={'auto'}
                 borderRadius={{xs:1,lg:5}}>

                <Grid container xs={12} height={'100%'} width={'100%'} direction={{xs:'row',lg:'column'}}
                      justifyContent={{xs:'center',md:'space-between'}} alignItems='center' p={1}>

                    <Grid item display={{xs:'none', md:'flex'}} xs={10} height={'100%'} width={'100%'} >

                        <Grid container xs={12} direction={{xs:'row',lg:'column'}}
                              justifyContent='left' alignItems='center'
                              height={'100%'} width={'100%'}>
                            {
                                prop.list.map((item)=>(
                                    <Grid borderRadius={2} item xs={3} lg={2} mb={1} mr={1}
                                          height={'inherit'}
                                          width={'inherit'}>
                                        <SHORTCUT_LIST_BUTTON item={item}/>
                                    </Grid>
                                ))
                            }
                        </Grid>

                    </Grid>

                    <Grid item xs={2} height={'100%'} width={'100%'} >

                            <FilterButton setSelect={prop.setSelect} selector={prop.selector} FilterList={prop.FilterList}/>

                    </Grid>

                </Grid>

            </Box>

        </Grid>
    )
}

function Filter_List(prop) {

    return(
        <Grid item  xs={7} lg={8} height={'inherit'} width={'inherit'}
              borderRadius={10}
              display={{xs:'none', md:'flex'}}
              flexDirection='column'
              justifyContent=   'center'
             >
            <Box height={'90%'} width={'90%'} mx={'auto'}>
                <Grid   container width={"100%"} height={"100%"} direction={'column'}
                        justifyContent={'center'} alignItems={'center'}>

                    <Grid item xs={8} width={'inherit'} height={'inherit'}>
                        <Box width={'100%'} height={'100%'} style={flex_styles.row_center} flexWrap={'wrap'}>
                            {
                                prop.filterList.map((item)=>(
                                    <Box m={1}>
                                        <CustomPopUpMenu
                                            type={item.type}
                                            selector = {prop.selector}
                                            selected={prop.selector[item.type]}
                                            list={item.list}
                                            setSelect={prop.setSelect}
                                            />
                                    </Box>
                                ))
                            }
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Grid>
    )
}
