import {Seperator_Bar} from "../Themes/Elements/Seperator_Bar";
import {Avatar, Box, Button, Grid, IconButton, Typography} from "@mui/material";
import {flex_styles} from "../Themes/Styles/styles";
import {NAME, REMOVE_ACCOUNT, SIGN_IN} from "../Themes/String/String_eng";
import {black_30, blue_0A, green_34, white_05, white_100, white_EC} from "../Themes/Styles/Color";
import {InputField, PasswordField} from "../Themes/Elements/Input_Field";
import {Edit} from '@mui/icons-material';
import {PoppinsFont} from "../Themes/Fonts/Fonts";
import actorPhoto from '../Asset/Actor.jpg';
import uploadImage from '../Asset/edit.png';
import React, {useState} from "react";


/*
 <Box
                                                                    component="img"
                                                                    height={"50%"}
                                                                    width={"50%"}
                                                                    alt="img"
                                                                    src={uploadImage}/>
* */

export function Settings(prop){


        const [disable, setDisable] = useState(true);
        const [editPhoto, setEditPhoto] = useState(false);

        const mouseEnter = () => {
            setEditPhoto(true);
        }
        const mouseLeave = () => {
            setEditPhoto(false);
        }

        const enableEdit = ()=>{
                setDisable(false);
        }
        const saveEdit= ()=>{
                setDisable(true);
        }

        return(
            <Box flexGrow={1}>
                    <Seperator_Bar/>
                    <Box flexGrow={1} style={flex_styles.row_center}>
                            <Box width={{xs: '90vw', sm: '50vw', md: '40vw', lg: '30vw'}} height={'auto'}>
                                    <Box width={'inherit'} height={'auto'} bgcolor={white_05}
                                         borderRadius={5}>
                                            <Box width={'100%'} height={'100%'}  style={flex_styles.col_center} alignItems={'center'}>
                                                    <Avatar onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                                                        sx={{
                                                            width:200, height:200,border:2,mt:5, borderColor:white_EC }}
                                                            >
                                                            <Avatar
                                                                sx={{
                                                                    position:'absolute',
                                                                    zIndex:0,
                                                                    width:'100%', height:'100%',border:2, borderColor:white_EC }} alt="Person" src={actorPhoto}/>
                                                            <Avatar

                                                                sx={{
                                                                    display:(editPhoto)?'flex':'none',
                                                                    position:'absolute',
                                                                    zIndex:5,
                                                                    width:'100%', height:'100%',border:2, borderColor:white_EC, backgroundColor:black_30 }}>
                                                               <IconButton sx={{width:'50%', height:'50%'}}>
                                                                   <Edit sx={{color:'white', width:'100%', height:'100%'}}/>
                                                               </IconButton>
                                                            </Avatar>
                                                    </Avatar>

                                            </Box>
                                            <Grid container direction={'column'} width={'100%'} height={'100%'} pt={5}>
                                                    <Grid item xs={2} width={'100%'} mb={2}>
                                                            <InputField disabled={disable} placeholder={'Name'} value={'name'} type={'text'} title={NAME}/>
                                                    </Grid>
                                                    <Grid item xs={2} width={'100%'} mb={2}>
                                                        <PasswordField disabled={disable} placeholder={'Old Password...'} title={'Old Password:'}/>
                                                    </Grid>
                                                    <Grid item xs={(prop.type === SIGN_IN)?2:2} width={'100%'} mb={2}>
                                                           <PasswordField disabled={disable} placeholder={'New Password...'} title={'New Password:'}/>
                                                    </Grid>
                                                    <Grid item xs={(prop.type === SIGN_IN)?2:2} width={'100%'} mb={2}>
                                                            <PasswordField disabled={disable} placeholder={'New Password...'} title={'Rewrite Password:'}/>
                                                    </Grid>
                                                    <Grid item xs={2} display={'flex'}
                                                          justifyContent={'space-between'} alignItems={'center'}
                                                          width={'100%'} p={1} px={5} mt={10} mb={2}>

                                                            <Button disabled={disable} onClick={saveEdit} sx={{
                                                                        textTransform:'none',
                                                                        "&,&:hover":{backgroundColor:green_34, color:white_100},
                                                                        fontFamily:PoppinsFont, fontWeight:'bolder',
                                                                        p:2,px:{xs:2,md:5}, borderRadius:2}}>
                                                                    Save
                                                            </Button>
                                                            <Button onClick={enableEdit} sx={{       textTransform:'none',
                                                                                "&,&:hover":{backgroundColor:blue_0A, color:white_100},
                                                                                fontFamily:PoppinsFont,fontWeight:'bolder',p:2,px:{xs:2,md:5}, borderRadius:2}}>
                                                                    Edit
                                                            </Button>


                                                    </Grid>


                                            </Grid>
                                    </Box>
                                <Box width={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} height={'auto'}  mt={5} mb={5}>
                                    <Typography color={white_100}>
                                        {REMOVE_ACCOUNT}
                                    </Typography>
                                    <Button sx={{       textTransform:'none',
                                        "&,&:hover":{backgroundColor:'red', color:white_100},
                                        fontFamily:PoppinsFont,fontWeight:'bolder',p:2,px:{xs:2,md:5}, borderRadius:2}}>
                                        Remove Account
                                    </Button>

                                </Box>

                            </Box>

                    </Box>
            </Box>
        )
}