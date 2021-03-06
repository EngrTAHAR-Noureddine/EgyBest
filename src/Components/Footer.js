import {Box, Button, Typography} from "@mui/material";
import {blue_0A, grey_36, white_100} from "../Themes/Styles/Color";
import {LOGO} from "../Themes/String/String_eng";
import {flex_styles} from "../Themes/Styles/styles";
import {Facebook, Twitter} from "@mui/icons-material";
import {AmiriFont} from "../Themes/Fonts/Fonts";
import String from '../Themes/String/String';

export function Footer(prop) {
    let date = new Date();
    const year = date.getFullYear();
    const string = new String(prop.isArabic);

    return(
        <Box  flexGrow={1} height={'auto'} bgcolor={grey_36} mt={50}>
            <Box flexGrow={1} height={'auto'} display={'flex'} justifyContent={'space-between'} p={1} px={{xs:1,sm:2,xl:5}}>
                <Typography variant={'h3'}
                            fontFamily={AmiriFont}
                            fontStyle={'italic'}
                            color={white_100}>{string.LOGO_EGY+string.LOGO_BEST}</Typography>
                <Box width={'auto'} height={'auto'} display={'flex'}
                     flexDirection={{xs:'column',md:string.ROW_REVERSE()}}
                     justifyContent={'center'} alignItems={{xs:'center',md:'start'}}>

                    <Button disabled sx={{textTransform:'none',m:1}}>
                        <Typography color={white_100} fontFamily={AmiriFont}>{string.FOLLOW_US()}</Typography>
                    </Button>

                    <Button variant={'outlined'} startIcon={<Facebook sx={{color:blue_0A}}/>}
                            sx={{color:blue_0A,fontFamily:AmiriFont, textTransform:'none',m:1}}>
                        Facebook
                    </Button>
                    <Button variant={'outlined'} startIcon={<Twitter sx={{color:blue_0A}}/>}
                            sx={{color:blue_0A,fontFamily:AmiriFont, textTransform:'none',m:1, mr:0}}>
                        Twitter
                    </Button>
                </Box>
            </Box>
            <Box flexGrow={1} height={'auto'} style={flex_styles.row_center}>
                <Typography color={white_100}>CopyRight {LOGO} {year}</Typography>
            </Box>
        </Box>
    )

}