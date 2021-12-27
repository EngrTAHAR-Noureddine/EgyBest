import {Box, Button, Typography} from "@mui/material";
import {blue_0A, grey_36, white_100} from "../Themes/Styles/Color";
import {LOGO} from "../Themes/String/String";
import {flex_styles} from "../Themes/Styles/styles";
import {Facebook, Twitter} from "@mui/icons-material";
import {PoppinsFont} from "../Themes/Fonts/Fonts";

export function Footer() {
    let date = new Date();
    const year = date.getFullYear();

    return(
        <Box flexGrow={1} height={'auto'} bgcolor={grey_36} mt={5}>
            <Box flexGrow={1} height={'auto'} display={'flex'} justifyContent={'space-between'} p={1} px={{xs:1,md:5}}>
                <Typography variant={'h2'} color={white_100}>{LOGO}</Typography>
                <Box width={'auto'} height={'auto'} display={'flex'} flexDirection={{xs:'column',md:'row'}} justifyContent={'center'} alignItems={{xs:'center',md:'start'}}>
                    <Button disabled sx={{textTransform:'none',m:1}}>
                        <Typography color={white_100} fontFamily={PoppinsFont}>Follow us on:</Typography>
                    </Button>
                    <Button variant={'outlined'} startIcon={<Facebook color={blue_0A}/>}
                            sx={{color:blue_0A,fontFamily:PoppinsFont, textTransform:'none',m:1}}>
                        Facebook
                    </Button>
                    <Button variant={'outlined'} startIcon={<Twitter color={blue_0A}/>}
                            sx={{color:blue_0A,fontFamily:PoppinsFont, textTransform:'none',m:1}}>
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