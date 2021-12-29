import {Box} from "@mui/material";
import {Seperator_Bar} from "../Themes/Elements/Seperator_Bar";
import Result_List from "../Components/Result_List";
import {BoxPersonPhoto} from "../Components/BoxPersonPhoto";
import {TYPOGRAPHY_GIG_TITLE_UNDERLINED} from "../Themes/Styles/Typographies";

export default function Actor(prop) {
    return(
        <Box>
            <Seperator_Bar/>
            <BoxPersonPhoto name={prop.actor.name} photo={prop.actor.photo}/>
            <TYPOGRAPHY_GIG_TITLE_UNDERLINED what={prop.work} number={30}/>
            <Result_List list={prop.list}/>
        </Box>
    )

}