import {Box, Grid} from "@mui/material";
import {Seperator_Bar} from "../Themes/Elements/Seperator_Bar";
import {flex_styles} from "../Themes/Styles/styles";
import {
    TYPOGRAPHY_FORGET_PASSWORD,
    TYPOGRAPHY_IF_HAVE_ACCOUNT,
    TYPOGRAPHY_SIGN_TITLE
} from "../Themes/Styles/Typographies";
import {blue_0A, green_34, white_05} from "../Themes/Styles/Color";
import {InputField, PasswordField} from "../Themes/Elements/Input_Field";
import {SIGN_BUTTON} from "../Themes/Elements/Buttons";
import {SignWith} from "../Themes/Elements/Sign_with";
import String from '../Themes/String/String';

export function Sign(prop){
    const string = new String(prop.isArabic);
    return (
        <Box >
            <Seperator_Bar/>
            <Box flexGrow={1} style={flex_styles.row_center} >
                <Box width={{xs: '90vw', sm: '50vw', md: '40vw', lg: '30vw'}} height={{xs:'auto',sm:'auto',md:'auto'}}>


                    <Box width={'inherit'} height={{xs:'5vh', sm:'5vw', md:'3vh'}}>

                        <Box width={'inherit'} height={{xs:'10vh', sm:'10vw', md:'6vh'}}
                             style={flex_styles.row_center} >

                            <Box height={'100%'} width={'60%'} bgcolor={(prop.type === string.SIGN_IN())?blue_0A:green_34} borderRadius={1000}>
                                <TYPOGRAPHY_SIGN_TITLE title={prop.type}/>
                            </Box>

                        </Box>

                    </Box>

                    <Box width={'inherit'} height={{xs:'auto', sm:'auto', md:'auto'}} bgcolor={white_05}
                         borderRadius={5}
                         >

                        <Grid container direction={'column'} width={'100%'} height={'100%'} pt={5}>
                            <Grid item xs={2} width={'100%'} mb={2}>
                                {(prop.type === string.SIGN_IN())? <InputField placeholder={'email'} value={'email'} type={'email'}
                                                                               title={string.EMAIL()} direction={string.JUSTIFY_DIRECTION()}/>
                                    : <InputField placeholder={'Name'} value={'name'} type={'text'} title={string.NAME()} direction={string.JUSTIFY_DIRECTION()}/>}

                            </Grid>
                            <Grid item xs={2} width={'100%'} mb={2}>
                                {(prop.type === string.SIGN_IN())? <PasswordField placeholder={'password'} title={string.PASSWORD()} direction={string.JUSTIFY_DIRECTION()}/>
                                    : <InputField placeholder={'email'} value={'email'} type={'email'} title={string.EMAIL()} direction={string.JUSTIFY_DIRECTION()}/>}

                            </Grid>
                            <Grid item xs={(prop.type === string.SIGN_IN())?2:2} width={'100%'} mb={2}>
                                {(prop.type === string.SIGN_IN())?<TYPOGRAPHY_FORGET_PASSWORD title={string.FORGET_PASSWORD()} direction={string.JUSTIFY_DIRECTION()}/>
                                    :<PasswordField placeholder={'password'} title={string.PASSWORD()} direction={string.JUSTIFY_DIRECTION()}/>}
                            </Grid>
                            <Grid item xs={2} style={flex_styles.row_center}
                                  width={'100%'} mb={2}>
                               <SIGN_BUTTON click={prop.setUser} item={string.SIGN_IN()} type={prop.type}/>
                            </Grid>
                            <Grid item xs={(prop.type === string.SIGN_IN())?3:3} md={(prop.type === string.SIGN_IN())?4:3} width={'100%'} mb={2}>
                                <SignWith text={(prop.type === string.SIGN_IN())?string.OR_SIGN_IN_WITH():string.OR_SIGN_UP_WITH()}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} mb={2}>
                                {(prop.type === string.SIGN_IN())? <TYPOGRAPHY_IF_HAVE_ACCOUNT isArabic={prop.isArabic}
                                                                                               direction={string.ROW_REVERSE()}
                                                                                               text={string.DONT_HAVE_ACCOUNT()}
                                                                                               linkText={string.SIGN_UP()}/>
                                    : <TYPOGRAPHY_IF_HAVE_ACCOUNT direction={string.ROW_REVERSE()}
                                                                  isArabic={prop.isArabic}
                                                                  text={string.HAVE_ACCOUNT()}
                                                                  linkText={string.SIGN_IN()}/>}

                            </Grid>
                        </Grid>

                    </Box>

                </Box>

            </Box>
        </Box>
    );
}