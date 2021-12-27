import {Box} from "@mui/material";
import {Seperator_Bar} from "../Themes/Elements/Seperator_Bar";
import {flex_styles} from "../Themes/Styles/styles";
import {IMAGE} from "../Themes/Elements/IMAGE";
import pageNotFound from '../Asset/404.jpg';
import {TYPOGRAPHY_PAGE_NOT_FOUND} from "../Themes/Styles/Typographies";
import {PAGE_NOT_FOUND} from "../Themes/String/String";

export function PageNotFound() {
    return(
        <Box flexGrow={1}>
            <Seperator_Bar/>
            <Box flexGrow={1} style={flex_styles.col_center} alignItems={'center'}>
                <Box width={'50vw'} height={'30vw'} >
                    <IMAGE url={pageNotFound}/>
                </Box>
                <TYPOGRAPHY_PAGE_NOT_FOUND title={PAGE_NOT_FOUND}/>
            </Box>

        </Box>
    )
}