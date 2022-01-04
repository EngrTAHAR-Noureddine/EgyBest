import {Card, IconButton} from "@mui/material";
import {flex_styles} from "../Styles/styles";
import String from '../String/String';
import {Delete} from "@mui/icons-material";
import {red_e5, white_05} from "../Styles/Color";
import {TYPOGRAPHY_NOTIFICATION} from "../Styles/Typographies";


function NotificationItem(prop) {
    const string = new String(prop.isArabic);

    return(
        <Card   style={(prop.isArabic)?flex_styles.row_reverse_space_btn:flex_styles.row_space_btn}
               sx={{ width:'90%', height:'auto', backgroundColor:white_05, mb:2 ,alignItems:'center',px:2}}>
                <TYPOGRAPHY_NOTIFICATION align={string.JUSTIFY_DIRECTION()} notification={string.NOTIFICATION_TEXT()}/>
                <IconButton sx={{height:'fit-content'}} >
                    <Delete sx={{color:red_e5}}/>
                </IconButton>
        </Card>
    )

}

export default NotificationItem;