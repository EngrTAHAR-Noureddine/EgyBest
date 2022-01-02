import {Container} from "@mui/material";
import {Seperator_Bar} from "../Themes/Elements/Seperator_Bar";
import ListNotification from "../Components/List_notification";

function Notification(prop){
    return(
        <>
            <Seperator_Bar/>
        <Container maxWidth={'lg'} sx={{ height:'auto'}}>
            <ListNotification isArabic={prop.isArabic}/>
        </Container>
        </>
    )
}

export default Notification;