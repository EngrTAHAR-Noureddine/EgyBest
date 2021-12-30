import {Box} from "@mui/material";
import {PhotoPerson} from "../Themes/Elements/PhotoPerson";
import {flex_styles} from "../Themes/Styles/styles";


export function BoxPersonPhoto(prop) {
    return (
        <Box flexWrap={1} height={'50vh'} mb={10} style={flex_styles.row_center}>
            <PhotoPerson size={'50vh'} name={prop.name} photo={prop.photo}/>
        </Box>
    )
}