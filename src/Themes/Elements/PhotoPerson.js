import {Avatar, Box} from "@mui/material";
import {flex_styles} from "../Styles/styles";
import {white_EC} from "../Styles/Color";
import {TYPOGRAPHY_NAME_PERSON} from "../Styles/Typographies";


export function PhotoPerson(prop) {
    return(
        <Box width={prop.size} height={prop.size}>
            <Box width={'100%'} height={'80%'}  style={flex_styles.col_center} alignItems={'center'}>
                <Avatar sx={{ width:'60%', height:'75%',border:2, borderColor:white_EC }} alt="Person" src={prop.photo}/>
            </Box>
            <Box width={'100%'} height={'20%'}>
                    <TYPOGRAPHY_NAME_PERSON item={prop.name}/>
            </Box>
        </Box>
    )

}