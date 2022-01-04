import NotificationItem from "../Themes/Elements/NotificationItem";
import {Box} from "@mui/material";
import {flex_styles} from "../Themes/Styles/styles";
import {useState} from "react";
import {TYPOGRAPHY_NOT_EXIST} from "../Themes/Styles/Typographies";
import String from '../Themes/String/String';

function ListNotification(prop){
    const string = new String(prop.isArabic);
    const [listNotification, setListNotification]=useState([1,2,3,4,5,6,7,8,9,10]);


    return (<Box sx={{p:1,px:0}} style={flex_styles.col_center} alignItems={'center'}>
                { (listNotification && listNotification.length>0)?
                    listNotification.map((item)=>(
                        <NotificationItem i={item}  isArabic={prop.isArabic} />))
                    :<TYPOGRAPHY_NOT_EXIST text={string.NOTIFICATION_NOT_EXIST()}/> }
            </Box>)
}

export default ListNotification;